const app = Vue.createApp({

    data() {
        return {
            busqueda: '',
            toastVisible: false,
            toastMsg: '',
            carrito: [],
            slidActual: 0,
            totalSlides: 3,

            productos: [
                {
                    id: 1,
                    nombre: 'Labial Matte',
                    precio: 45000,
                    precioOriginal: 65000,
                    stock: true,
                    favorito: false,
                    imagen: 'IMG/labial.jpg'
                },
                {
                    id: 2,
                    nombre: 'Base Líquida',
                    precio: 70000,
                    precioOriginal: 95000,
                    stock: true,
                    favorito: false,
                    imagen: 'img/base.jpg'
                },
                {
                    id: 3,
                    nombre: 'Paleta de Sombras',
                    precio: 90000,
                    precioOriginal: 120000,
                    stock: false,
                    favorito: false,
                    imagen: 'img/sombras.jpg'
                },
                {
                    id: 4,
                    nombre: 'Rubor Rosa',
                    precio: 40000,
                    precioOriginal: 55000,
                    stock: true,
                    favorito: false,
                    imagen: 'img/rubor.jpg'
                },
                {
                    id: 5,
                    nombre: 'Iluminador Glow',
                    precio: 55000,
                    precioOriginal: 75000,
                    stock: true,
                    favorito: false,
                    imagen: 'img/iluminador.jpg'
                },
                {
                    id: 6,
                    nombre: 'Set de Brochas',
                    precio: 30000,
                    precioOriginal: 45000,
                    stock: false,
                    favorito: false,
                    imagen: 'img/brochas.jpg'
                },
                {
                    id: 7,
                    nombre: 'Contorno en Polvo',
                    precio: 48000,
                    precioOriginal: 65000,
                    stock: true,
                    favorito: false,
                    imagen: 'img/contorno.jpg'
                },
                {
                    id: 8,
                    nombre: 'Gloss Transparente',
                    precio: 25000,
                    precioOriginal: 35000,
                    stock: true,
                    favorito: false,
                    imagen: 'img/gloss.jpg'
                }
            ]
        }
    },

    // Auto-avance del carrusel al montar la app
    mounted() {
        setInterval(() => {
            this.nextSlide()
        }, 4500)
    },

    methods: {

        // ── Carrusel ──
        nextSlide() {
            this.slidActual = (this.slidActual + 1) % this.totalSlides
        },
        prevSlide() {
            this.slidActual = (this.slidActual - 1 + this.totalSlides) % this.totalSlides
        },

        // ── Productos ──
        comprar(producto) {
            this.carrito.push(producto)
            this.mostrarToast('Agregaste: ' + producto.nombre)
        },
        toggleFav(producto) {
            producto.favorito = !producto.favorito
        },

        // ── Carrito ──
        verCarrito() {
            if (this.carrito.length === 0) {
                this.mostrarToast('Tu carrito está vacío')
            } else {
                this.mostrarToast('Tienes ' + this.carrito.length + ' producto(s) en el carrito')
            }
        },

        // ── Toast ──
        mostrarToast(msg) {
            this.toastMsg = msg
            this.toastVisible = true
            setTimeout(() => {
                this.toastVisible = false
            }, 2500)
        },

        // ── Formato de precio ──
        formatearPrecio(precio) {
            if (!precio) return ''
            return precio.toLocaleString('es-CO')
        }
    },

    computed: {
        // Filtra productos según lo que escribe el usuario en el buscador
        filtrados() {
            return this.productos.filter(p =>
                p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
            )
        }
    }

})


app.mount('#app')


