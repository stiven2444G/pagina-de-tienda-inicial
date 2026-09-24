    const categorias = document.querySelectorAll(".side-links a");
    const productos = document.querySelectorAll(".card");
    const busca3 = document.getElementById("buscador");

    // FILTRAR POR CATEGORÍA
    categorias.forEach(categoria => {
      categoria.addEventListener("click", function(e) {
        e.preventDefault();
        // Quitar activo
        categorias.forEach(item => {
          item.classList.remove("active");
        });

        // Activar categoría seleccionada
        this.classList.add("active");
        const categoriaSeleccionada =
          this.dataset.categoria;
        productos.forEach(producto => {
          if (
            categoriaSeleccionada === "todos" ||
            producto.dataset.categoria === categoriaSeleccionada
          ) {
            producto.style.display = "block";
          } else {
            producto.style.display = "none";
          }
        });
      });
    });

    // BUSCADOR
    buscador.addEventListener("input", function() {
      const texto = this.value.toLowerCase();
      productos.forEach(producto => {
        const nombre =
          producto.querySelector("h3").textContent.toLowerCase();
        const descripcion =
          producto.querySelector("p").textContent.toLowerCase();

        if (
          nombre.includes(texto) ||
          descripcion.includes(texto)
        ) {
          producto.style.display = "block";
        } else {
          producto.style.display = "none";
        }
      });
    });
