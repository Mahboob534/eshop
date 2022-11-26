

interface paths{
    HOME:string; 
    PAGE404: string;

    PRODUCTS: string;
    PRODUCTS_CAT: string;
    PRODUCTS_CAT_PAGINATION: string;
    
    PRODUCT: string;
    PRODUCT_ID: string;

    BASKET: string;
    CHECKOUT:string;
    
    PAYMENT:string;

    LOGIN: string;
    REGISTER:string;

    DASHBOARD: string;
    DASHBOARD_PROFILE: string;
    DASHBOARD_ORDERS: string;
    DASHBOARD_ADMIN_ORDERS: string;
    DASHBOARD_PRODUCT: string;
    DASHBOARD_QUANTITY: string;
    DASHBOARD_CATEGORY: string;
    DASHBOARD_WISHLIST: string;
    DASHBOARD_USERS: string;
    DASHBOARD_SETTINGS:string;
    DASHBOARD_EXIT: string;
}



export const PATHS:paths = {
    HOME: '/',
    PAGE404: '*',

    PRODUCTS: '/products',
    PRODUCTS_CAT: '/products/:categoryName',
    PRODUCTS_CAT_PAGINATION: '/products/:categoryName/:pageNumber',
    
    PRODUCT: '/product',
    PRODUCT_ID: '/product/:productId',

    BASKET: '/basket',
    CHECKOUT: '/checkout',
    
    PAYMENT: '/payment',

    LOGIN: '/login',
    REGISTER: '/register',

    DASHBOARD: '/dashboard',
    DASHBOARD_PROFILE: '/dashboard/profile',
    DASHBOARD_ORDERS: '/dashboard/orders',
    DASHBOARD_ADMIN_ORDERS: '/dashboard/protected-orders',
    DASHBOARD_PRODUCT: '/dashboard/product',
    DASHBOARD_QUANTITY: '/dashboard/quantity',
    DASHBOARD_CATEGORY: '/dashboard/category',
    DASHBOARD_WISHLIST: '/dashboard/wishlist',
    DASHBOARD_USERS: '/dashboard/users',
    DASHBOARD_SETTINGS: '/dashboard/settings',
    DASHBOARD_EXIT: '/dashboard/logout',
}