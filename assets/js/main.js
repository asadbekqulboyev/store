document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".btn");
    const menu = dropdown.querySelector(".dropdowns_menu");
  
    button.addEventListener("click", (event) => {
      event.stopPropagation(); 
      dropdown.classList.toggle("active");
    });
  });
  
  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
  });

  const showButton = document.querySelector(".right_side .show");
  const leftSide = document.querySelector(".buy .left_side");
  const rightSide = document.querySelector(" .buy .right_side");
  const firstParagraph = document.querySelector(".right_side .description .first");
  const secondParagraph = document.querySelector(".right_side .description .second");

  let isExpanded = false;

  showButton.addEventListener("click", (e) => {
    e.preventDefault();
    isExpanded = !isExpanded;

    if (isExpanded) {
      firstParagraph.classList.remove("visible");
      secondParagraph.classList.add("visible");

      leftSide.classList.add("hidden");

      rightSide.classList.add("expanded");

      showButton.textContent = "Скрыть";
    } else {
      secondParagraph.classList.remove("visible");
      firstParagraph.classList.add("visible");

      leftSide.classList.remove("hidden");

      rightSide.classList.remove("expanded");

      showButton.textContent = "Показать весь текст";
    }
  });

  document.querySelector('.show_more').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.querySelectorAll('.none').forEach(item => { 
        item.classList.remove('none'); 
    });
    this.style.display = 'none';
  });

  document.querySelector('.on_off').addEventListener('click', function () {
    this.classList.toggle('active');
  });
  

  const minusButton = document.querySelector('.minus');
  const plusButton = document.querySelector('.plus');
  const resultElement = document.querySelector('.result');

  let result = parseInt(resultElement.textContent, 10);

  const calculators = document.querySelectorAll('.calculator');

    calculators.forEach(calculator => {
        const minusButton = calculator.querySelector('.minus');
        const plusButton = calculator.querySelector('.plus');
        const resultElement = calculator.querySelector('.result');

        let result = parseInt(resultElement.textContent, 10);

        minusButton.addEventListener('click', () => {
            if (result > 0) {
                result--;
                resultElement.textContent = result;
            }
        });

        plusButton.addEventListener('click', () => {
            result++;
            resultElement.textContent = result;
        });
  });  


  const container = document.querySelector('.pagination-container');
  const numbers = document.querySelectorAll('.pagination-number');
  const prevBtn = document.querySelector('.pagination-prev');
  const nextBtn = document.querySelector('.pagination-next');
  
  let currentPage = 1;
  const totalPages = 8;
  
  const updateButtons = () => {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    numbers.forEach(num => {
      const page = parseInt(num.textContent);
      num.classList.toggle('active', page === currentPage);
    });
  }
  
  numbers.forEach(num => {
    num.addEventListener('click', () => {
      currentPage = parseInt(num.textContent);
      updateButtons();
    });
  });
  
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateButtons();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateButtons();
    }
  });
  
  updateButtons();

  let popular_products_swiper = new Swiper('.popular_products_swiper', {
    // freeMode: true,
    spaceBetween: 30,
    loop: true,
    // centeredSlides: true,
    breakpoints: {
      0:{
        slidesPerView: 1, 
      },
      320: {
        slidesPerView: 1.2, 
        spaceBetween: 20,
      },
      556: {
        slidesPerView: 2, 
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5, 
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3, 
        spaceBetween: 20,
      },
      1140: {
        slidesPerView: 4, 
        spaceBetween: 20,
      }
    
    },
    slidesPerView: 5,
    
  });

  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        // If the clicked item wasn't active, open it
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
  });

  // cookie
  const cookieBanner = document.getElementById("cookieBanner");
  const isCookieAccepted = localStorage.getItem("cookieAccepted");

  if (!isCookieAccepted) {
    cookieBanner.style.display = "block";
  }

  document.getElementById("acceptButton").addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    cookieBanner.style.display = "none";
  });

  const modal = document.querySelector('.modal');
  const openBtns = document.querySelectorAll('.open-btn');
  const closeBtn = document.querySelector('.close-btn');
  const backBtn = document.querySelector('.back-btn');

  function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);
  backBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });



  //favBtns
  let favBtns = document.querySelectorAll('.fav-btn');

  favBtns.forEach(favBtn => {
    let svg = favBtn.querySelector('.svg');
    favBtn.addEventListener('click', () => {
      svg.classList.toggle('red'); 
    });
  });
  
  //end fav btns


  //cart modal
  const modal2 = document.querySelector('.cartModal');
  const openBtns2 = document.querySelectorAll('.openModalBtn');
  const closeBtn2 = document.querySelector('.closeBtn');
  const backBtn2 = document.querySelector('.backBtn');
  const clearCartBtn = document.querySelector('.clearCartBtn');
  const deleteItemBtns = document.querySelectorAll('.deleteItem');
  
  function openModal2() {
    modal2.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal2() {
    modal2.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  openBtns2.forEach(btn => {
    btn.addEventListener('click', openModal2);
  });
  
  closeBtn2.addEventListener('click', closeModal2);
  backBtn2.addEventListener('click', closeModal2);
  
  modal2.addEventListener('click', (e) => {
    if (e.target === modal2) closeModal2();
  });
  
  deleteItemBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.cartItem').remove();
      updateTotalPrice();
    });
  });
  
  clearCartBtn.addEventListener('click', () => {
    document.querySelector('.cartItems').innerHTML = '';
    updateTotalPrice();
  });
  
  function updateTotalPrice() {}

  const cartModal = document.querySelector('.modalCart');
  const openCartModalBtns = document.querySelectorAll('.openCartModalBtn'); 
  const closeCartBtn = document.querySelector('.closeModalButton');
  const backCartBtn = document.querySelector('.backButton');
  const clearCartActionBtn = document.querySelector('.clearCartAction');
  const removeItemBtns = document.querySelectorAll('.removeItem');
  
  function openCartModal() {
    cartModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    modal2.classList.remove('show');
  }
  
  function closeCartModal() {
    cartModal.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  openCartModalBtns.forEach(btn => {
    btn.addEventListener('click', openCartModal);
    
  });
  
  closeCartBtn.addEventListener('click', closeCartModal);
  backCartBtn.addEventListener('click', closeCartModal);
  
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) closeCartModal();
  });
  
  removeItemBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productItem = e.target.closest('.productItem');
      productItem.remove();
      updateCartTotal();
    });
  });
  

  
  function updateCartTotal() {
    let totalPrice = 0;
    const productItems = document.querySelectorAll('.productItem');
  
    productItems.forEach(item => {
      const price = parseFloat(item.querySelector('.price').textContent.replace('€', '').trim());
      totalPrice += price;
    });
  
    const totalAmountElement = document.querySelector('.totalAmount');
    totalAmountElement.textContent = `€${totalPrice.toFixed(2)}`;
  }


  //check form
  const items = document.querySelectorAll('.social_item');
  const mistake = document.querySelector('.mistake');
  const orderButton = document.querySelector('.order');

  items.forEach(item => {
      item.addEventListener('click', () => {
          items.forEach(el => el.classList.remove('click'));
          item.classList.add('click');
          
          mistake.style.display = 'none';
      });
  });

  orderButton.addEventListener('click', (event) => {
      const selectedSocial = document.querySelector('.social_item.click');
      
      if (!selectedSocial) {
          mistake.style.display = 'flex';
          event.preventDefault();
      } else {
          mistake.style.display = 'none';
      }
  });

  
  //third modal
  const checkoutModal = document.querySelector('.popupCheckout');
  const openCheckoutModalBtns = document.querySelectorAll('.openCheckoutModal');
  const closeCheckoutModalBtns = document.querySelectorAll('.dismissButton');
  const returnButton = document.querySelector('.returnButton');
  
  function openCheckoutModal() {
    checkoutModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function closeCheckoutModal() {
    checkoutModal.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  openCheckoutModalBtns.forEach(btn => {
    btn.addEventListener('click', openCheckoutModal);
  });
  
  closeCheckoutModalBtns.forEach(btn => {
    btn.addEventListener('click', closeCheckoutModal);
  });

  returnButton.addEventListener('click', () => {
    checkoutModal.classList.remove('show');
    document.body.style.overflow = '';  
  });
  
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
      closeCheckoutModal();
    }
  });
  
  function toggleSections() {
    const toggleButtons = document.querySelectorAll('.actions .item');
    const sections = document.querySelectorAll('.bottom');

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            if (sections[index].classList.contains('active')) {
                sections[index].classList.remove('active');
                return;
            }

            sections.forEach(section => {
                section.classList.remove('active');
            });

            sections[index].classList.add('active');
        });
    });
  }

  toggleSections();
  
  function toggleNoneClass() {
    const items = document.querySelectorAll('.types .button:nth-child(n+22)');
    if (window.innerWidth < 1440) {
      items.forEach(item => item.classList.add('none'));
    }
  }
  
  window.addEventListener('resize', toggleNoneClass);
  toggleNoneClass();
  

  let yes = document.querySelector(".yes");
  let notificationContent = document.querySelector(".notifiaction");
  
  yes.addEventListener('click', (e) => {
    e.preventDefault();
    notificationContent.style.display = 'none'; // Elementni yashirish
  });
  

  const searchInput = document.querySelector('.search');
  const searchResults = document.querySelector('.search-results');

  searchInput.addEventListener('focus', () => {
    searchResults.style.display = 'block';
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      searchResults.style.display = 'none';
    }, 200);
  });

  let cityBtn = document.querySelector('#citey')
  let cityModal = document.querySelector('.modal#modalCity')
  cityBtn.addEventListener('click',()=>{
    cityModal.classList.add('show')
  })
  document.querySelector('.modal-close-btn').addEventListener('click', () => {
    document.querySelector('.modal#modalCity').classList.remove('show');
});

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const cardInfo = button.nextElementSibling; // Tugmadan keyingi elementni tanlaymiz
    if (cardInfo.style.display === 'none' || cardInfo.style.display === '') {
      cardInfo.classList.add('active')
    }
    button.style.display = 'none'; // Bosilgan tugmani yashiramiz
  });
});

// 
document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('click', function() {
    this.classList.toggle('active'); 
  });
});
});

  