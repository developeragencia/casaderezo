"use client"

import * as React from "react"
import {
  Sparkles,
  ShoppingBag,
  Phone,
  Flame,
  Crown,
  Wind,
  Heart,
  Shield,
  Search,
  CheckCircle2,
  Truck,
  Building2,
  MessageCircle,
  Plus,
  Minus,
  Trash2,
  Star,
  ChevronRight,
  HelpCircle,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PRODUCTS, CATEGORIES, type Product } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

interface CartItem {
  product: Product
  quantity: number
  isWholesale: boolean
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [wholesaleMode, setWholesaleMode] = React.useState(false)
  const [cart, setCart] = React.useState<CartItem[]>([])
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null)
  const [cartOpen, setCartOpen] = React.useState(false)

  // Filtragem dos produtos
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Adicionar ao carrinho
  const addToCart = (product: Product, qty: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        const newQty = existing.quantity + qty
        const isWholesale = wholesaleMode || newQty >= product.minWholesale
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: newQty, isWholesale }
            : item
        )
      } else {
        const isWholesale = wholesaleMode || qty >= product.minWholesale
        return [...prev, { product, quantity: qty, isWholesale }]
      }
    })
    setCartOpen(true)
  }

  // Atualizar quantidade
  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta
            if (newQty <= 0) return null
            const isWholesale = wholesaleMode || newQty >= item.product.minWholesale
            return { ...item, quantity: newQty, isWholesale }
          }
          return item
        })
        .filter(Boolean) as CartItem[]
    )
  }

  // Remover item
  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  // Totais
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0)
  const cartSubtotal = cart.reduce((acc, item) => {
    const priceToUse = item.isWholesale ? item.product.wholesalePrice : item.product.price
    return acc + priceToUse * item.quantity
  }, 0)

  // Montar link do WhatsApp
  const generateWhatsAppLink = () => {
    const phone = "5511999999999" // Número comercial da loja
    let text = `*Olá, Casa de Rezo! Gostaria de fazer um pedido:*%0A%0A`
    cart.forEach((item) => {
      const price = item.isWholesale ? item.product.wholesalePrice : item.product.price
      const tipo = item.isWholesale ? "(Preço de Atacado)" : "(Varejo)"
      text += `• ${item.quantity}x ${item.product.name} ${tipo} - ${formatPrice(price * item.quantity)}%0A`
    })
    text += `%0A*Total Estimado:* ${formatPrice(cartSubtotal)}%0A`
    text += `*Modalidade:* ${wholesaleMode ? "Atacado / Revenda" : "Varejo"}%0A`
    text += `Poderiam confirmar a disponibilidade e o frete para o meu CEP?`
    return `https://wa.me/${phone}?text=${text}`
  }

  return (
    <div className="min-h-screen bg-[#FAF7F1] text-zinc-900 flex flex-col font-sans">
      {/* Barra superior de aviso de atacado e frete */}
      <div className="bg-[#1E3350] text-[#FAFAFA] text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-[#CC8800] shrink-0" />
        <span>
          <strong>ATACADO DIRETO DA FÁBRICA:</strong> Descontos de até 45% para lojistas e casas de rezo!
        </span>
        <span className="hidden md:inline">• Entrega rápida e segura para todo o Brasil</span>
      </div>

      {/* Header Principal */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedCategory("all")}>
            <div className="w-10 h-10 rounded-xl bg-[#CC8800] text-white flex items-center justify-center font-bold text-xl shadow-md shadow-[#CC8800]/30">
              CR
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E3350] block font-serif">
                CASA DE REZO
              </span>
              <span className="text-[10px] sm:text-xs text-[#CC8800] font-semibold tracking-wider uppercase block -mt-1">
                Artigos Religiosos • Atacado & Varejo
              </span>
            </div>
          </div>

          {/* Barra de Busca Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <Input
              type="text"
              placeholder="Buscar imagens, velas 7 dias, guias, incensos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-zinc-300 focus:border-[#CC8800] focus:ring-[#CC8800]/20 bg-zinc-50/70"
            />
          </div>

          {/* Ações Direitas: Botão de Atacado & Carrinho */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Toggle de Modo Atacado */}
            <button
              onClick={() => setWholesaleMode(!wholesaleMode)}
              className={`text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all flex items-center gap-1.5 ${
                wholesaleMode
                  ? "bg-[#CC8800] text-white border-[#CC8800] shadow-sm"
                  : "bg-amber-50 text-[#CC8800] border-amber-200 hover:bg-amber-100"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{wholesaleMode ? "Tabela Atacado Ativa" : "Ver Preços Atacado"}</span>
            </button>

            {/* Gaveta do Carrinho / Pedido */}
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="default"
                  size="default"
                  className="relative rounded-full bg-[#1E3350] hover:bg-[#2C4B75] text-white px-3 sm:px-5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Meu Pedido</span>
                  {totalItemsCount > 0 && (
                    <span className="ml-1 bg-[#CC8800] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      {totalItemsCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md flex flex-col justify-between p-6 bg-white">
                <div>
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold text-[#1E3350] flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-[#CC8800]" />
                      Seu Pedido ({totalItemsCount} itens)
                    </SheetTitle>
                    <SheetDescription className="text-xs text-zinc-500">
                      Revise seus itens e conclua seu atendimento diretamente no WhatsApp.
                    </SheetDescription>
                  </SheetHeader>

                  <div className="mt-6 space-y-4 max-h-[55vh] overflow-y-auto pr-1">
                    {cart.length === 0 ? (
                      <div className="text-center py-12 text-zinc-400">
                        <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                        <p className="font-medium text-zinc-600">Seu pedido está vazio</p>
                        <p className="text-xs text-zinc-400 mt-1">
                          Adicione artigos do nosso catálogo para solicitar cotação ou entrega.
                        </p>
                      </div>
                    ) : (
                      cart.map((item) => {
                        const price = item.isWholesale ? item.product.wholesalePrice : item.product.price
                        return (
                          <div
                            key={item.product.id}
                            className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 bg-zinc-50/70 gap-3"
                          >
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-zinc-900 truncate">
                                {item.product.name}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs font-bold text-[#1E3350]">
                                  {formatPrice(price)}
                                </span>
                                {item.isWholesale && (
                                  <Badge variant="wholesale" className="text-[10px] py-0 px-1.5">
                                    Atacado
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                onClick={() => updateQuantity(item.product.id, -1)}
                                className="w-7 h-7 rounded-lg border border-zinc-300 flex items-center justify-center hover:bg-zinc-200 transition-colors"
                              >
                                <Minus className="w-3.5 h-3.5 text-zinc-600" />
                              </button>
                              <span className="w-6 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, 1)}
                                className="w-7 h-7 rounded-lg border border-zinc-300 flex items-center justify-center hover:bg-zinc-200 transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5 text-zinc-600" />
                              </button>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="ml-1 p-1 text-zinc-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>

                {cart.length > 0 && (
                  <SheetFooter className="border-t border-zinc-200 pt-4 flex-col gap-3">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm font-medium text-zinc-600">Subtotal Estimado:</span>
                      <span className="text-xl font-bold text-[#1E3350]">{formatPrice(cartSubtotal)}</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 text-center w-full">
                      Descontos adicionais e frete calculados no atendimento via WhatsApp.
                    </p>
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full py-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Finalizar Pedido no WhatsApp
                      </Button>
                    </a>
                  </SheetFooter>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Busca Mobile */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <Input
              type="text"
              placeholder="Buscar imagens, velas, guias..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-zinc-300 bg-zinc-50 text-sm"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1E3350] to-[#16253B] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CC8800_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CC8800]/20 border border-[#CC8800]/40 text-[#E6B84D] text-xs sm:text-sm font-medium mb-6">
            <Crown className="w-4 h-4 text-[#CC8800]" />
            Tradição, Axé e Devoção para Todo o Brasil
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-serif text-white max-w-4xl mx-auto leading-tight">
            Distribuidora de Artigos Religiosos <br />
            <span className="text-[#E6B84D]">Atacado & Varejo Direto de Fábrica</span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Imagens sacras em resina, velas 100% parafina, guias legítimas em cristal, ervas sagradas e louças de firmeza com o melhor preço e entrega garantida.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => {
                const el = document.getElementById("catalogo")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
              size="lg"
              className="w-full sm:w-auto bg-[#CC8800] hover:bg-[#B87A00] text-white font-bold rounded-full px-8 py-6 text-base shadow-lg shadow-[#CC8800]/30"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explorar Catálogo
            </Button>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20receber%20o%20catálogo%20completo%20de%20Atacado%20em%20PDF%20da%20Casa%20de%20Rezo."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-zinc-400 bg-white/10 text-white hover:bg-white/20 hover:text-white px-8 py-6 text-base font-semibold backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
                Pedir Catálogo no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Destaques de Benefícios */}
      <section className="bg-white border-b border-zinc-200 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50">
            <div className="w-10 h-10 rounded-lg bg-[#CC8800]/10 text-[#CC8800] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Preço de Atacado</h4>
              <p className="text-[11px] text-zinc-500">Direto para terreiros e lojas</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50">
            <div className="w-10 h-10 rounded-lg bg-[#1E3350]/10 text-[#1E3350] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Envio Seguro</h4>
              <p className="text-[11px] text-zinc-500">Embalagem reforçada antichoque</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50/50">
            <div className="w-10 h-10 rounded-lg bg-green-600/10 text-green-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Qualidade Sagrada</h4>
              <p className="text-[11px] text-zinc-500">Materiais nobres e legítimos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/50">
            <div className="w-10 h-10 rounded-lg bg-purple-600/10 text-purple-700 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Atendimento Dedicado</h4>
              <p className="text-[11px] text-zinc-500">Consultoria rápida no WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Produtos */}
      <main id="catalogo" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Barra de Filtros e Categorias */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1E3350]">
              Catálogo de Artigos Religiosos
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              {filteredProducts.length} itens encontrados para o seu altar, oração e revenda.
            </p>
          </div>

          {/* Banner de Alternância Atacado */}
          <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-medium text-zinc-600">Visualizar como:</span>
            <button
              onClick={() => setWholesaleMode(false)}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                !wholesaleMode ? "bg-[#1E3350] text-white" : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              Varejo
            </button>
            <button
              onClick={() => setWholesaleMode(true)}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                wholesaleMode ? "bg-[#CC8800] text-white" : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Atacado Lojista
            </button>
          </div>
        </div>

        {/* Abas de Categorias */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#CC8800] text-white border-[#CC8800] shadow-md shadow-[#CC8800]/20"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grid de Produtos */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200">
            <Search className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-zinc-700">Nenhum produto encontrado</h3>
            <p className="text-sm text-zinc-400 mt-1">
              Tente buscar por outro termo ou selecione outra categoria.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("all")
                setSearchQuery("")
              }}
              variant="outline"
              className="mt-4 rounded-full"
            >
              Ver todos os produtos
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const displayPrice = wholesaleMode ? product.wholesalePrice : product.price

              return (
                <Card
                  key={product.id}
                  className="overflow-hidden flex flex-col justify-between border-zinc-200 bg-white hover:border-[#CC8800]/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                        {product.categoryLabel}
                      </span>
                      {product.badge && (
                        <Badge
                          variant={product.badge.includes("Atacado") ? "wholesale" : "default"}
                          className="text-[10px] py-0 px-2 font-bold"
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-base font-bold text-zinc-900 line-clamp-2 group-hover:text-[#CC8800] transition-colors">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center gap-1 mt-1 text-amber-500 text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-zinc-800">{product.rating.toFixed(1)}</span>
                      <span className="text-zinc-400">({product.reviewsCount})</span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 pt-1 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-zinc-500 line-clamp-2 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 mt-auto">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-zinc-500 font-medium">
                          {wholesaleMode ? "Preço Atacado:" : "Preço Varejo:"}
                        </span>
                        <span className="text-lg font-bold text-[#1E3350]">
                          {formatPrice(displayPrice)}
                        </span>
                      </div>
                      {!wholesaleMode && (
                        <div className="text-[11px] text-[#CC8800] font-semibold mt-1">
                          No atacado: {formatPrice(product.wholesalePrice)} (a partir de {product.minWholesale} un.)
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0 gap-2 flex">
                    <Button
                      onClick={() => setSelectedProduct(product)}
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-xl text-xs font-semibold border-zinc-300 hover:bg-zinc-100"
                    >
                      Detalhes
                    </Button>
                    <Button
                      onClick={() => addToCart(product, wholesaleMode ? product.minWholesale : 1)}
                      size="sm"
                      className="flex-1 rounded-xl text-xs font-bold bg-[#CC8800] hover:bg-[#B87A00] text-white shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5 mr-1" />
                      Adicionar
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        )}

        {/* Modal de Detalhes do Produto */}
        {selectedProduct && (
          <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
            <DialogContent className="max-w-lg bg-white rounded-2xl p-6">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary" className="text-xs">
                    {selectedProduct.categoryLabel}
                  </Badge>
                  <span className="text-xs text-zinc-400">SKU: {selectedProduct.sku}</span>
                </div>
                <DialogTitle className="text-xl font-bold text-zinc-900 font-serif">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-zinc-600 mt-2">
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 my-4">
                <div className="border border-zinc-200 rounded-xl p-4 bg-zinc-50/70">
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                    Especificações Técnicas:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-600">
                    {selectedProduct.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CC8800] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-amber-50/50 p-4 rounded-xl border border-amber-200/60">
                  <div>
                    <span className="text-xs text-zinc-500 block">Preço de Varejo:</span>
                    <span className="text-lg font-bold text-zinc-900">
                      {formatPrice(selectedProduct.price)}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#CC8800] font-semibold block">
                      Preço de Atacado:
                    </span>
                    <span className="text-lg font-bold text-[#CC8800]">
                      {formatPrice(selectedProduct.wholesalePrice)}
                    </span>
                    <span className="text-[10px] text-zinc-500 block">
                      (Mínimo de {selectedProduct.minWholesale} unidades)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Button
                  onClick={() => {
                    addToCart(selectedProduct, 1)
                    setSelectedProduct(null)
                  }}
                  variant="outline"
                  className="flex-1 rounded-xl font-bold"
                >
                  Adicionar no Varejo (1 un.)
                </Button>
                <Button
                  onClick={() => {
                    addToCart(selectedProduct, selectedProduct.minWholesale)
                    setSelectedProduct(null)
                  }}
                  className="flex-1 rounded-xl bg-[#CC8800] hover:bg-[#B87A00] text-white font-bold"
                >
                  Comprar no Atacado ({selectedProduct.minWholesale} un.)
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Seção Institucional: Seja um Revendedor */}
        <section className="mt-20 bg-gradient-to-r from-[#1E3350] to-[#2C4B75] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase font-bold text-[#E6B84D] tracking-widest block mb-2">
              Parceria Comercial e Atacado
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-serif mb-4 leading-snug">
              Tem uma loja esotérica, casa de axé ou comércio religioso?
            </h3>
            <p className="text-sm sm:text-base text-zinc-200 mb-6 font-light leading-relaxed">
              Fornecemos para centenas de lojistas, terreiros, centros e devotos em todo o Brasil. Obtenha margens de revenda superiores a 100% com produtos consagrados pela qualidade e durabilidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Sou%20lojista/revendedor%20e%20gostaria%20de%20abrir%20cadastro%20de%20atacado%20na%20Casa%20de%20Rezo."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#CC8800] hover:bg-[#B87A00] text-white font-bold rounded-full px-6 py-5 text-sm shadow-lg shadow-[#CC8800]/30">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com Representante Comercial
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ - Dúvidas Frequentes */}
        <section className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#1E3350]">
              Dúvidas Frequentes
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
              Tudo o que você precisa saber sobre compras, atacado e entregas na Casa de Rezo.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-zinc-200 p-4 shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm font-semibold text-zinc-800">
                Qual o valor mínimo para comprar no atacado?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-zinc-600 leading-relaxed">
                Você pode comprar no atacado selecionando as quantidades mínimas indicadas em cada produto (geralmente entre 5 a 10 unidades por item), ou fazer um pedido misto com valor total a partir de R$ 300,00.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm font-semibold text-zinc-800">
                As imagens chegam inteiras? Como funciona a garantia de entrega?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-zinc-600 leading-relaxed">
                Todas as nossas peças em resina, cerâmica e vidro são envolvidas individualmente em plástico bolha de alta densidade, protegidas com cantoneiras e embaladas em caixas de papelão reforçado. Caso ocorra qualquer dano no transporte, realizamos a reposição imediata sem burocracia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-sm font-semibold text-zinc-800">
                Quais são as formas de pagamento aceitas?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-zinc-600 leading-relaxed">
                Aceitamos Pix com 5% de desconto imediato, cartão de crédito em até 12x (com até 3x sem juros) e boleto bancário para faturamento a prazo exclusivo de lojistas cadastrados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-sm font-semibold text-zinc-800">
                Como faço para pedir um produto que não encontrei no site?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-zinc-600 leading-relaxed">
                Basta nos chamar no WhatsApp! Trabalhamos com encomendas sob medida para terreiros e templos religiosos, incluindo vestimentas, ferramentaria, imagens de grande porte e ervas raras.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-[#1E3350] text-zinc-300 mt-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Coluna 1: Sobre */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#CC8800] text-white flex items-center justify-center font-bold text-base">
                  CR
                </div>
                <span className="text-xl font-bold text-white font-serif tracking-tight">
                  CASA DE REZO
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Sua parceira de fé, atacado e devoção. Distribuidora autorizada de artigos religiosos para terreiros, centros e devotos em todo o Brasil.
              </p>
            </div>

            {/* Coluna 2: Categorias */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Categorias
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#catalogo" className="hover:text-[#CC8800] transition-colors">Imagens Sacras & Orixás</a></li>
                <li><a href="#catalogo" className="hover:text-[#CC8800] transition-colors">Velas de 7 Dias & Votivas</a></li>
                <li><a href="#catalogo" className="hover:text-[#CC8800] transition-colors">Ervas & Defumadores</a></li>
                <li><a href="#catalogo" className="hover:text-[#CC8800] transition-colors">Guias & Fios de Conta</a></li>
                <li><a href="#catalogo" className="hover:text-[#CC8800] transition-colors">Louças & Quartinhas</a></li>
              </ul>
            </div>

            {/* Coluna 3: Atendimento */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Atendimento
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#CC8800]" />
                  <span>Segunda a Sexta: 08h às 18h</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#CC8800]" />
                  <span>Sábado: 08h às 13h</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp: Atendimento Rápido</span>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Segurança */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Garantia e Segurança
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Compre com total segurança. Seus dados estão protegidos com criptografia SSL e seus produtos viajam com seguro de carga completo.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-zinc-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Site 100% Seguro & Verificado</span>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-zinc-800" />

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Casa de Rezo Artigos Religiosos. Todos os direitos reservados.</p>
            <p>CNPJ: Atacado & Varejo • casadorezo.com.br</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
