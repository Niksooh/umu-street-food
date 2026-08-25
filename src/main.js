import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="UMU, accueil"><img class="brand-logo" src="/umu-logo.png" alt="UMU street food" /></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>
    <nav id="main-nav" class="main-nav" aria-label="Navigation principale">
      <a href="#menu">La carte</a>
      <a href="#story">Notre histoire</a>
      <a href="#infos">Nous trouver</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-wrap">
      <div class="hero-copy reveal">
        <p class="eyebrow hero-eyebrow"><span></span> L'expérience des Samoa à votre porte</p>
        <h1>Le goût qui<br><em>fait voyager.</em></h1>
        <p class="hero-text">Des recettes généreuses, des épices qui claquent et beaucoup de soleil dans chaque bouchée.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#menu">Voir la carte <span>↘</span></a>
          <a class="text-link" href="#story">Découvrir UMU <span>→</span></a>
        </div>
        <div class="hero-note"><strong>12:00 — 22:30</strong><span>·</span> Du mardi au dimanche</div>
      </div>
      <div class="hero-visual reveal">
        <img src="/img/samoa.png" alt="Spécialités et univers des Samoa" />
      </div>
    </section>

    <div class="ticker" aria-label="Plats UMU Street food"><div class="ticker-track"><span>PACIFIC STEAK</span><i>·</i><span>FIRE GRILLED CHICKEN</span><i>·</i><span>GRILLED MAHI-MAHI</span><i>·</i><span>COCONUT SHRIMP BASKET</span><i>·</i><span>RIZ À LA NOIX DE COCO</span><i>·</i><span>PATATES DOUCES RÔTIES</span><i>·</i><span>LÉGUMES GRILLÉS</span><i>·</i><span>TARO RÔTI</span><i>·</i><span aria-hidden="true">PACIFIC STEAK</span><i aria-hidden="true">·</i><span aria-hidden="true">FIRE GRILLED CHICKEN</span><i aria-hidden="true">·</i><span aria-hidden="true">GRILLED MAHI-MAHI</span><i aria-hidden="true">·</i><span aria-hidden="true">COCONUT SHRIMP BASKET</span><i aria-hidden="true">·</i><span aria-hidden="true">RIZ À LA NOIX DE COCO</span><i aria-hidden="true">·</i><span aria-hidden="true">PATATES DOUCES RÔTIES</span><i aria-hidden="true">·</i><span aria-hidden="true">LÉGUMES GRILLÉS</span><i aria-hidden="true">·</i><span aria-hidden="true">TARO RÔTI</span><i aria-hidden="true">·</i></div></div>

    <section id="menu" class="menu-section section-wrap">
      <div class="section-heading"><div><p class="eyebrow hero-eyebrow"><span></span> Découvrez nos spécialités</p><h2>La carte <em>UMU Street Food</em></h2></div><a class="text-link" href="#order">Tout commander <span>→</span></a></div>
      <div class="menu-category"><h3 class="category-title">Entrées</h3><div class="category-line"></div><div class="menu-grid">
        <article class="menu-item"><div class="item-image"><img src="/img/avaiki_salad.png" alt="Avaiki Salad" /></div><div class="item-info"><h3>Avaiki Salad</h3><p>Salade fraîche, mangue, avocat, concombre, tomates cerises et vinaigrette au fruit de la passion.</p><strong>9,50 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/niu_slaw.png" alt="Niu Slaw" /></div><div class="item-info"><h3>Niu Slaw</h3><p>Salade croquante de chou, carottes, noix de coco râpée et vinaigrette au citron vert.</p><strong>8,50 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/oka_Ia.png" alt="Oka I'a" /></div><div class="item-info"><h3>Oka I'a</h3><p>Poisson cru mariné au citron vert, lait de coco, tomates, concombre et oignons.</p><strong>11,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/kalua_pork.png" alt="Kalua Pork" /></div><div class="item-info"><h3>Kalua Pork</h3><p>Porc effiloché fumé, lentement cuit et servi avec une sauce maison.</p><strong>10,50 €</strong></div></article>
      </div></div>
      <div class="menu-category"><h3 class="category-title">Plats</h3><div class="category-line"></div><div class="menu-grid">
        <article class="menu-item featured"><div class="item-image"><img src="/img/pacific_steak%20.png" alt="Pacific Steak" /></div><div class="item-info"><h3>Pacific Steak</h3><p>Steak de bœuf grillé, servi avec un beurre aux herbes.</p><strong>17,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/fire_grilled_chicken.png" alt="Fire Grilled Chicken" /></div><div class="item-info"><h3>Fire Grilled Chicken</h3><p>Poulet grillé mariné au citron vert, à l’ail et au lait de coco.</p><strong>14,50 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/grilled_mahi-mahi.png" alt="Grilled Mahi-Mahi" /></div><div class="item-info"><h3>Grilled Mahi-Mahi</h3><p>Filet de mahi-mahi grillé, beurre au citron vert et herbes fraîches.</p><strong>16,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/coconut_shrimp_basket.png" alt="Coconut Shrimp Basket" /></div><div class="item-info"><h3>Coconut Shrimp Basket</h3><p>Crevettes panées à la noix de coco, servies avec une sauce tropicale.</p><strong>15,00 €</strong></div></article>
      </div></div>
      <div class="menu-category"><h3 class="category-title">Accompagnements</h3><div class="category-line"></div><div class="menu-grid">
        <article class="menu-item"><div class="item-image"><img src="/img/riz_coco.png" alt="Riz parfumé à la noix de coco" /></div><div class="item-info"><h3>Riz à la noix de coco</h3><p>Riz parfumé cuit dans le lait de coco.</p><strong>4,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/patate_douce_roti.png" alt="Patates douces rôties" /></div><div class="item-info"><h3>Patates douces rôties</h3><p>Patates douces rôties au four, légèrement caramélisées.</p><strong>5,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/legume_grille.png" alt="Légumes grillés" /></div><div class="item-info"><h3>Légumes grillés</h3><p>Mélange de légumes grillés à la flamme.</p><strong>5,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/taro.png" alt="Taro rôti" /></div><div class="item-info"><h3>Taro rôti</h3><p>Taro tendre rôti à la flamme, fondant et légèrement croustillant.</p><strong>5,00 €</strong></div></article>
      </div></div>
      <div class="menu-category"><h3 class="category-title">Desserts</h3><div class="category-line"></div><div class="menu-grid">
        <article class="menu-item"><div class="item-image"><img src="/img/coconut_cake.png" alt="Coconut Cake" /></div><div class="item-info"><h3>Coconut Cake</h3><p>Gâteau moelleux à la noix de coco.</p><strong>6,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/banana_fritters.png" alt="Banana Fritters" /></div><div class="item-info"><h3>Banana Fritters</h3><p>Beignets de banane dorés, légèrement sucrés.</p><strong>6,50 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/pineapple_upside_down_cake.png" alt="Pineapple Upside-Down Cake" /></div><div class="item-info"><h3>Pineapple Upside-Down Cake</h3><p>Gâteau moelleux renversé à l’ananas caramélisé.</p><strong>7,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/tropical_fruit_bowl.png" alt="Tropical Fruit Bowl" /></div><div class="item-info"><h3>Tropical Fruit Bowl</h3><p>Assortiment de fruits tropicaux frais : mangue, papaye, ananas et fruit de la passion.</p><strong>7,50 €</strong></div></article>
      </div></div>
      <div class="menu-category"><h3 class="category-title">Boissons</h3><div class="category-line"></div><div class="menu-grid">
        <article class="menu-item"><div class="item-image"><img src="/img/vailima_lager.png" alt="Vailima Lager" /></div><div class="item-info"><h3>Vailima Lager</h3><p>Bière blonde emblématique des Samoa, créée à Apia. Légère et rafraîchissante, elle est devenue l’une des bières les plus associées à l’archipel samoan.</p><strong>5,50 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/eau_de_coco_fraîche.png" alt="Eau de coco fraîche" /></div><div class="item-info"><h3>Eau de coco fraîche</h3><p>Eau de coco naturelle, fraîche et désaltérante.</p><strong>5,00 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/jus_de_mangue.png" alt="Jus de mangue" /></div><div class="item-info"><h3>Jus de mangue</h3><p>Jus tropical doux et fruité.</p><strong>4,50 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/jus_de_fruit_de_la_passion.png" alt="Jus de fruit de la passion" /></div><div class="item-info"><h3>Jus de fruit de la passion</h3><p>Jus frais aux saveurs acidulées et tropicales.</p><strong>4,50 €</strong></div></article>
        <article class="menu-item"><div class="item-image"><img src="/img/the_glace_tropical.png" alt="Thé glacé tropical" /></div><div class="item-info"><h3>Thé glacé tropical</h3><p>Thé glacé aux notes de fruits tropicaux.</p><strong>4,00 €</strong></div></article>
      </div></div>
    </section>

    <section id="story" class="story section-wrap"><div class="story-identity"><img class="story-flag" src="/img/drapeau.png" alt="Drapeau des Samoa" /><div class="story-mark">UMU Street Food<br><span>EST.</span> 2026</div></div><div><p class="eyebrow"><span></span> Petit camion, grandes saveurs</p><h2>On cuisine<br><em>sans frontières.</em></h2><p>Le UMU Street Food, c'est un camion de quartier où les îles samoa rencontre les rues de Los Santos. On mélange les influences, on respecte les produits et on envoie du goût, vite et bien.</p><a class="button button-dark" href="#infos">En savoir plus <span>↗</span></a></div></section>

    <section id="infos" class="info-strip section-wrap"><div><p class="eyebrow visit-eyebrow"><span></span> Passe nous voir</p><h2>On se retrouve<br><em>à table ?</em></h2></div><div class="info-details"><div class="location-schedule"><p><strong>Lundi</strong><br>Mirror Park</p><p><strong>Mardi</strong><br>Mirror Park</p><p><strong>Mercredi</strong><br>Plage de Vespucci</p><p><strong>Jeudi</strong><br>Place des Cubes</p><p><strong>Vendredi</strong><br>Mirror Park</p><p><strong>Samedi</strong><br>Mirror Park</p><p><strong>Dimanche</strong><br>Vinewood</p></div><p class="lifeinvader-note">Commandes disponibles via le <strong>LifeInvader de UMU Street Food</strong>.</p></div></section>
  </main>
  <footer><a class="brand" href="#top"><img class="brand-logo" src="/umu-logo.png" alt="UMU street food" /></a><p>Du soleil dans chaque bouchée.</p><small>© 2026 UMU street food</small></footer>
`

const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.main-nav')
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open')
  menuToggle.setAttribute('aria-expanded', isOpen)
})

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')))

document.querySelectorAll('.menu-category .menu-grid').forEach((grid) => {
  grid.classList.add('carousel-grid')
  const controls = document.createElement('div')
  controls.className = 'carousel-controls'
  controls.innerHTML = '<button type="button" class="carousel-button" aria-label="Plat précédent">←</button><button type="button" class="carousel-button" aria-label="Plat suivant">→</button>'
  grid.after(controls)

  const [previous, next] = controls.querySelectorAll('button')
  const move = (direction) => grid.scrollBy({ left: direction * grid.clientWidth * 0.82, behavior: 'smooth' })
  previous.addEventListener('click', () => move(-1))
  next.addEventListener('click', () => move(1))
  grid.addEventListener('wheel', (event) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault()
      grid.scrollLeft += event.deltaY
    }
  }, { passive: false })
})
