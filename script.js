
const products = [
    {
        id: 1,
        name: "個人武器追加",
        category: "武器",
        price: 8000,
        image: "./image/clothing.png",
        description: "個人武器導入。"
    },
    {
       id: 2,
        name: "Tier1 Drug",
        category: "薬",
        price: 2000,
        image: "image/vehicle.png",
        description: "Tier1 Drug導入"
    },
    {
        id: 3,
        name: "服×1",
        category: "服",
        price: 2000,
        image: "image/script.png",
        description: "服×1導入。"
    },
    {
        id: 4,
        name: "60発武器アップグレード",
        category: "武器",
        price: 3000,
        image: "image/gang.png",
        description: "個人武器に装填できるマガジンアップグレードです。"
    },
    {
        id: 5,
        name: "Max Drug",
        category: "薬",
        price: 4000,
        image: "image/sportscar.png",
        description: "回復量がTier1より多いです。"
    },
    {
        id: 6,
        name: "80発武器アップグレード",
        category: "武器",
        price: 4000,
        image: "image/ui.png",
        description: "個人武器に装填できるマガジンアップグレードです。"
    },
    
    {
        id: 7,
        name: "100発武器アップグレード",
        category: "武器",
        price: 5000,
        image: "image/product7.png",
        description: "個人武器に装填できるマガジンアップグレードです。"
    },
    {
        id: 8,
        name: "200発武器アップグレード",
        category: "武器",
        price: 6000,
        image: "image/product8.png",
        description: "個人武器に装填できるマガジンアップグレードです。"
    },
    {
        id: 9,
        name: "チャットタグunban",
        category: "unban",
        price: 3500,
        image: "image/product9.png",
        description: "詳細はDiscordチケットまで。"
    },
    {
        id: 10,
        name: "Tier1",
        category: "ギャング",
        price: 4500,
        image: "image/product10.png",
        description: "服2着＋ギャングストライキ5"
    },
    {
        id: 11,
        name: "Tier2",
        category: "ギャング",
        price: 7500,
        image: "image/product11.png",
        description: "服4着＋ギャングストライキ7"
    },
    {
        id: 12,
        name: "Tier3",
        category: "ギャング",
        price: 10000,
        image: "image/product12.png",
        description: "服4着＋ギャング武器＋ギャングストライキ10"
    },
    {
        id: 13,
        name: "チャットタグ＋TX No clip",
        category: "Chat tag",
        price: 8000,
        image: "image/product13.png",
        description: "VAMP LAで使えるオリジナルチャットタグ＋TX No clip"
    },
    {
        id: 14,
        name: "チャットタグ＋No clip",
        category: "Chat tag",
        price: 4000,
        image: "image/product14.png",
        description: "VAMP LAで使えるオリジナルチャットタグ＋Basic No clip"
    },
    {
        id: 15,
        name: "アップグレード",
        category: "Chat tag",
        price: 4000,
        image: "image/product15.png",
        description: "Basic No clipからTX Noclipにアップグレード可能です。"
    },
    {
        id: 16,
        name: "チーターunban",
        category: "unban",
        price: 5000,
        image: "image/product16.png",
        description: "BANされた人がもう一度サーバーに接続できるものです。"
    },
      {
        id: 17,
        name: "ブラックリスト解除",
        category: "unban",
        price: 10000,
        image: "image/product17.png",
        description: "ブラックリストにされた人がもう一度サーバーに接続できるものです。"
    },
    {
        id: 18,
        name: "服×5",
        category: "服",
        price: 7500,
        image: "image/product18.png",
        description: "服5着導入できるセット商品です。"
    },
    {
        id: 19,
        name: "服作成依頼＋導入×1",
        category: "服",
        price: 3500,
        image: "image/product19.png",
        description: "Clothing Creatorに依頼ができ導入までできるものです。"
    },
     {
        id: 20,
        name: "オープン記念 個人武器＋100発武器アップグレード",
        category: "武器",
        price: 10000,
        image: "image/product20.png",
        description: "サーバーオープン記念の格安のものになっております。"
    }
];

let selectedCategory = "All";
let searchTerm = "";

const grid = document.getElementById("productGrid");
const categories = document.getElementById("categories");

const formatPrice = price =>
    "¥" + price.toLocaleString("ja-JP");

function renderCategories() {
    
const list = [
    "All",
    "武器",
    "薬",
    "服",
    "ギャング",
    "Chat tag",
    "unban"
];


    categories.innerHTML = "";

    list.forEach(category => {
        const button = document.createElement("button");
        button.className = "category-btn";
        button.textContent = category;

        if (category === selectedCategory) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            selectedCategory = category;
            renderCategories();
            renderProducts();
        });

        categories.appendChild(button);
    });
}

function renderProducts() {
    grid.innerHTML = "";

    const filtered = products.filter(product => {
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.textContent = "商品が見つかりませんでした。";
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
    ${product.image
        ? `<img src="${product.image}" alt="${product.name}">`
        : product.icon}
</div>
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <h3>${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <span class="view-btn">VIEW DETAILS →</span>
            </div>
        `;

        card.addEventListener("click", () => {
            window.location.hash = "product-" + product.id;
        });

        grid.appendChild(card);
    });
}

function showHome() {
    document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("detailPage").classList.add("hidden");
}

function showProduct(product) {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("detailPage").classList.remove("hidden");

    const detail = document.getElementById("productDetail");

    detail.innerHTML = `
        <div class="detail-layout">
            <div class="product-image">
    ${product.image
        ? `<img src="${product.image}" alt="${product.name}">`
        : product.icon}
</div>
            <div class="detail-info">
                <div class="eyebrow">${product.category}</div>
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <div class="detail-price">${formatPrice(product.price)}</div>
                <p>商品ID: ${product.id}</p>
                <p>購入機能は追加する予定はありません。</p>
            </div>
        </div>
    `;

    window.scrollTo(0, 0);
}

function handleRoute() {
    const hash = window.location.hash;

    if (hash.startsWith("#product-")) {
        const id = Number(hash.replace("#product-", ""));
        const product = products.find(p => p.id === id);

        if (product) {
            showProduct(product);
            return;
        }
    }

    showHome();
}

document.getElementById("searchInput")
    .addEventListener("input", event => {
        searchTerm = event.target.value.toLowerCase();
        renderProducts();
    });

document.getElementById("backButton")
    .addEventListener("click", () => {
        window.location.hash = "products";
    });

document.getElementById("homeLogo")
    .addEventListener("click", () => {
        window.location.hash = "";
    });

window.addEventListener("hashchange", handleRoute);

renderCategories();
renderProducts();
handleRoute();
