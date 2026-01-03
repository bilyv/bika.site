
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // Welcome Screen
            "welcome.choose": "Choose your language",
            "welcome.subtitle": "Select your preferred language to continue",

            // Navigation
            "nav.overview": "Overview",
            "nav.contact": "Contact",
            "nav.joinWaitlist": "Join waitlist",

            // Hero Section
            "hero.title": "Master Your Business Efficiency with Bika",
            "hero.subtitle": "Your inventory, sales, and finance—all in one place. One simple, unified view of your business growth.",
            "hero.emailPlaceholder": "Enter email",

            // Features
            "features.title": "Everything You Need to Run Your Business",
            "features.subtitle": "Bika replaces your disconnected tools with one unified operating system. Click a module to learn more.",

            "features.inventory.title": "Inventory Tracking",
            "features.inventory.desc": "Real-time stock monitoring, low stock alerts, and automated reordering. Never run out of inventory again.",

            "features.sales.title": "Sales Management",
            "features.sales.desc": "Track every sale, manage customer relationships, and analyze purchasing trends to boost your revenue.",

            "features.expenses.title": "Expense Tracking",
            "features.expenses.desc": "Monitor business spending, categorize expenses, and see exactly where your money is going.",

            "features.finance.title": "Finance & Accounting",
            "features.finance.desc": "Complete financial overview with profit & loss statements, balance sheets, and cash flow analysis.",

            "features.documents.title": "Document Management",
            "features.documents.desc": "Store and organize invoices, receipts, and contracts securely in one accessible location.",

            // Footer
            "footer.privacy": "Privacy",
            "footer.copyright": "© 2026 Bika Inc. All rights reserved.",

            // Contact Page
            "contact.title": "Let's talk",
            "contact.subtitle": "Have questions about Bika? We're here to help you scale your business operations effectively.",
            "contact.email": "Email us",
            "contact.visit": "Visit us",
            "contact.socials": "Socials",
            "contact.name": "Full Name",
            "contact.emailAddress": "Email Address",
            "contact.message": "Message",
            "contact.send": "Send Message",

            // Waitlist Modal
            "waitlist.title": "Join the waitlist",
            "waitlist.desc": "We're currently in invite-only beta. Enter your email to get early access.",
            "waitlist.placeholder": "you@gmail.com",
            "waitlist.submit": "Join waitlist"
        }
    },
    rw: {
        translation: {
            // Welcome Screen
            "welcome.choose": "Hitamo ururimi rwawe",
            "welcome.subtitle": "Hitamo ururimi ukunda kugirango ukomeze",

            // Navigation
            "nav.overview": "Incamake",
            "nav.contact": "Twandikire",
            "nav.joinWaitlist": "Injira mu rutonde",

            // Hero Section
            "hero.title": "Genzura Ubucuruzi Bwawe neza na Bika",
            "hero.subtitle": "Ibicuruzwa, amacuruzo, n'amafaranga—byose ahantu hamwe. Ureba bworoshye ubucuruzi bwawe bukura.",
            "hero.emailPlaceholder": "Injiza imeri yawe",

            // Features
            "features.title": "Ibyo Ukeneye Byose kugirango Ukore Ubucuruzi Bwawe",
            "features.subtitle": "Bika isimbuza ibikoresho byawe bidahuye hamwe na sisitemu imwe ihuriweho. Kanda kuri module ukeneye kumenya.",

            "features.inventory.title": "Gukurikirana Ibicuruzwa",
            "features.inventory.desc": "Gukurikirana ibicuruzwa mugihe nyacyo, iburira ryo hasi, no gutunganya byikora. Ntuzigera ubura ibicuruzwa.",

            "features.sales.title": "Gucunga Amacuruzo",
            "features.sales.desc": "Kurikirana amacuruzo yose, gucunga abakiriya, no gusesengura ibicuruzwa byiza kugirango ushyireho amafaranga menshi.",

            "features.expenses.title": "Gukurikirana Amafaranga Yakoreshejwe",
            "features.expenses.desc": "Kurikirana amafaranga yakoreshejwe mu bucuruzi, gushyira mu byiciro, maze urebe aho amafaranga yawe ajya.",

            "features.finance.title": "Ibaruramari n'Ibarurisho",
            "features.finance.desc": "Isesengura ryuzuye ry'amafaranga hamwe n'inyandiko z'inyungu n'igihombo, umubare w'ibintu n'amafaranga.",

            "features.documents.title": "Gucunga Inyandiko",
            "features.documents.desc": "Bika kandi utunganya amafakitire, inyemezabuguzi n'amasezerano muri kashe imwe.",

            // Footer
            "footer.privacy": "Ibanga",
            "footer.copyright": "© 2026 Bika Inc. Uburenganzira bwose burabitswe.",

            // Contact Page
            "contact.title": "Reka tuganire",
            "contact.subtitle": "Ufite ibibazo kuri Bika? Turi hano kukugirira ubufasha mukuzamura ubucuruzi bwawe neza.",
            "contact.email": "Twandikire kuri imeri",
            "contact.visit": "Dusure",
            "contact.socials": "Imbuga nkoranyambaga",
            "contact.name": "Amazina Yawe Yose",
            "contact.emailAddress": "Imeri Yawe",
            "contact.message": "Ubutumwa",
            "contact.send": "Kohereza Ubutumwa",

            // Waitlist Modal
            "waitlist.title": "Injira mu rutonde",
            "waitlist.desc": "Muri iki gihe dukora beta yo gutumira gusa. Injiza imeri yawe kugirango ubone uburyo bwo gutangira.",
            "waitlist.placeholder": "imeri@example.rw",
            "waitlist.submit": "Injira mu rutonde"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
