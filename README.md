# 🛋 Comfy Store (React)

一個以 React 建構的線上商店前端展示專案，用來練習商品列表、商品詳情、加入購物車等商業常見功能。

<br>

🚀 Demo

Live Demo: https://comfy-store-react-kappa.vercel.app/

![Comfy Store Demo](./src/assets/demo.gif)

<br>

## ✨ 功能特色

- 商品列表頁：可瀏覽所有商品，支援「網格 / 清單」兩種排版模式切換
- **篩選與搜尋**：搜尋條件同步到網址參數，方便分享或加入書籤後保留相同結果
- 購物車功能：可刪除商品、調整數量，購物車內容儲存在 Local Storage，確保重新整理後仍能保留紀錄
- 切換主題色：初始值依照使用者瀏覽器偏好設定（深色 / 淺色），並可手動切換，設定同樣儲存在 Local Storage

⚡ **效能優化**：

- Lazy Loading：只在需要時載入頁面或組件，縮短初始載入時間
- React Query：快取資料，減少重複 API 請求

🔧 **錯誤處理與體驗優化**：

- react-error-boundary 捕捉渲染過程錯誤，避免整個程式崩潰
- react-toastify 提示操作結果（如 加入購物車成功、錯誤提示）

<br>

## 🛠 技術棧

- **路由**：React Router DOM
- **狀態管理**：Redux Toolkit（集中管理頻繁更新的應用程式狀態）
- **資料請求**：Axios + React Query（使用 Axios 呼叫 API，搭配 React Query 處理快取、loading 狀態）
- **效能優化**：Lazy Loading (React.lazy + Suspense)
- **錯誤處理**：React Error Boundary
- **通知提示**：React Toastify
- 樣式：SCSS + CSS Modules （模組化樣式，保持程式結構乾淨）
- **客製化 Hook**：抽離重複邏輯，提升程式碼可讀性與重用性
- **部署**：Vite 作為建置工具，部署於 Vercel

<br>

## 📂 專案結構

src/

┣ features/ # 功能模組 (如 cart, products, home...)

┣ hooks/ # 自訂 Hook (如 useFrom, useInput, useLocalStorage)

┣ pages/ # 頁面 (如 Home, Products, Cart)

┣ services/ # 呼叫的 api (如 apiOrders, apiProducts)

┣ ui/ # UI 元件

┣ utils/ # 工具函式

┣ store.js # Redux Toolkit 狀態管理

┣ index.css # 全局樣式和可重複使用的 class

┣ main.js

┗ App.jsx
