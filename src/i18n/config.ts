
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
            "features.inventory.longDesc": "Bika's Inventory Tracking module provides a birds-eye view of your entire stock ecosystem, from warehouse to point of sale.",
            "features.inventory.problem": "Most businesses struggle with 'hidden' stock costs, stockouts during peak seasons, and manual entry errors that lead to lost revenue.",
            "features.inventory.solution": "Bika automates stock levels with real-time syncing. We use predictive alerts to tell you when a product is running low before it happens, and our QR scanning system eliminates manual entry errors entirely.",

            "features.sales.title": "Sales Management",
            "features.sales.desc": "Track every sale, manage customer relationships, and analyze purchasing trends to boost your revenue.",
            "features.sales.longDesc": "Our Sales Management system isn't just a record of transactions; it's a growth engine that analyzes every purchase to find your next opportunity.",
            "features.sales.problem": "Data siloed in different sales channels makes it impossible to understand true customer lifetime value or identify which products actually drive your margins.",
            "features.sales.solution": "Bika unifies all sales data—online and offline—into one dashboard. We provide automated customer segmentation and visual reports that show you exactly which sales strategies are working and which are wasting your budget.",

            "features.expenses.title": "Expense Tracking",
            "features.expenses.desc": "Monitor business spending, categorize expenses, and see exactly where your money is going.",
            "features.expenses.longDesc": "Track every cent that leaves your business with our automated Expense Tracking module, built for transparency and tax readiness.",
            "features.expenses.problem": "Lost receipts, uncategorized spending, and late-night expense reporting are massive time sinks that hurt business profitability and create tax compliance risks.",
            "features.expenses.solution": "With Bika, employees can snap photos of receipts on the go. Our AI automatically extracts amounts and categories, matching them to your bank feeds. You get a real-time burn-rate view that keeps your spending on track.",

            "features.finance.title": "Finance & Accounting",
            "features.finance.desc": "Complete financial overview with profit & loss statements, balance sheets, and cash flow analysis.",
            "features.finance.longDesc": "Professional Finance & Accounting tools that give you CFO-level insights without the complexity of traditional accounting software.",
            "features.finance.problem": "Relying on old spreadsheets or complex software means business owners are often making decisions based on data that is weeks or months out of date.",
            "features.finance.solution": "Bika generates your Balance Sheets, P&L statements, and Cash Flow reports instantly. Our simplified ledger system handles double-entry accounting in the background, so you always know your exact financial health in real-time.",

            "features.documents.title": "Document Management",
            "features.documents.desc": "Store and organize invoices, receipts, and contracts securely in one accessible location.",
            "features.documents.longDesc": "A secure, centralized vault for all your business Documents, organized by project, client, or financial year.",
            "features.documents.problem": "Searching through physical folders or cluttered email threads for a specific contract or invoice can waste hours of productive time every week.",
            "features.documents.solution": "Bika's Document Management system automatically links files to relevant transactions and clients. Everything is encrypted and searchable, meaning the contract you need is always just a two-second search away.",

            "features.back": "Back to features",
            "features.theProblem": "The Problem",
            "features.howBikaSolvesIt": "How Bika Solves It",
            "features.ready": "Ready to transform your business?",
            "features.readyDesc": "Join thousands of businesses already scaling with Bika.",
            "features.getStarted": "Get Started for Free",

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
            "features.inventory.longDesc": "Module ya Bika yo gukurikirana ibikoresho itanga ishusho yose y'uburyo ibikoresho byawe bihagaze, kuva mu bubiko kugeza aho bigurirwa.",
            "features.inventory.problem": "Ubucuruzi bwinshi bugorwa n'amafaranga 'ahishe' y'ibikoresho, kubura ibicuruzwa mu gihe habaye amagurishwa menshi, n'amakosa yo kwinjiza ibintu n'intoki atera guhomba amafaranga.",
            "features.inventory.solution": "Bika itunganya urwego rw'ibikoresho mu buryo bwikora igihe cyose. Dukoresha iburira ryerekana igihe kimwe mu bicuruzwa rigeze hasi mbere y'uko bishira, kandi sisitemu yacu ya QR ikuraho amakosa yo kwinjiza ibintu n'intoki.",

            "features.sales.title": "Gucunga Amacuruzo",
            "features.sales.desc": "Kurikirana amacuruzo yose, gucunga abakiriya, no gusesengura ibicuruzwa byiza kugirango ushyireho amafaranga menshi.",
            "features.sales.longDesc": "Sisitemu yacu yo gucunga amacuruzo si inyandiko gusa z'ubucuruzi; ni imashini ikura isesengura buri gicuruzwa cyaguzwe kugirango ibone amahirwe y'ubutaha.",
            "features.sales.problem": "Amakuru ari mu bice bitandukanye by'amacuruzo bituma bidashoboka kumva agaciro k'umukiriya cyangwa kumenya ibicuruzwa bitanga inyungu nyayo.",
            "features.sales.solution": "Bika ihuriza hamwe amakuru yose y'amacuruzo—ayo kuri interineti n'ayo kuri kontineri—muri dashboard imwe. Dutanga amakuru y'abakiriya mu buryo bwikora na raporo zingaragara zikwereka neza amayeri y'amacuruzo akora n'ayandi agutesha amafaranga.",

            "features.expenses.title": "Gukurikirana Amafaranga Yakoreshejwe",
            "features.expenses.desc": "Kurikirana amafaranga yakoreshejwe mu bucuruzi, gushyira mu byiciro, maze urebe aho amafaranga yawe ajya.",
            "features.expenses.longDesc": "Kurikirana buri santime isohoka mu bucuruzi bwawe na module yacu yikora yo gukurikirana amafaranga yakoreshejwe, yubatswe mu buryo bw'imikorere iboneye kandi yiteguye imisoro.",
            "features.expenses.problem": "Inyemezabuguzi zazimiye, amafaranga akoreshwa adashyizwe mu byiciro, na raporo z'amafaranga yakoreshejwe zikorwa nijoro ni igihe kinini gipfa kigakumira inyungu z'ubucuruzi kikaba n'izindi ngaruka mu bijyanye n'imisoro.",
            "features.expenses.solution": "Na Bika, abakozi bafotora inyemezabuguzi bagenda. Ubwi bwacu (AI) buhita bukura imibare n'ibyiciro mu buryo bwikora, bikabihura na banki yawe. Ubona ishusho y'imikoreshereze y'amafaranga yawe mugihe nyacyo igufasha kugenzura uko ukoresha amafaranga.",

            "features.finance.title": "Ibaruramari n'Ibarurisho",
            "features.finance.desc": "Isesengura ryuzuye ry'amafaranga hamwe n'inyandiko z'inyungu n'igihombo, umubare w'ibintu n'amafaranga.",
            "features.finance.longDesc": "Ibikoresho by'umwuga by'imari n'ibaruramari biguha ishusho nk'iy'umuyobozi w'imari (CFO) utagombye gukoresha porogaramu zikomeye z'ibaruramari.",
            "features.finance.problem": "Kwitwaza impapuro za kera cyangwa porogaramu zikomeye bituma ba nyiri ubucuruzi bafata ibyemezo bashingiye ku makuru y'iminsi cyangwa amezi yashize.",
            "features.finance.solution": "Bika ihita ikorera imibare y'imari (Balance Sheets), inyungu n'ibihombo (P&L), na raporo z'amafaranga asohoka n'ayinjira (Cash Flow). Sisitemu yacu yoroheje ikora ibaruramari (double-entry) mu buryo bwo mu mizi, kugirango ube uzi neza uko imari yawe ihagaze mugihe nyacyo.",

            "features.documents.title": "Gucunga Inyandiko",
            "features.documents.desc": "Bika kandi utunganya amafakitire, inyemezabuguzi n'amasezerano muri kashe imwe.",
            "features.documents.longDesc": "Ahantu hihishe kandi hagati h'inyandiko zose z'ubucuruzi bwawe, ziteguye mu mushinga, umukiriya, cyangwa umwaka w'imari.",
            "features.documents.problem": "Gushakisha mu mafolder y'impapuro cyambo mu butumwa bwa imeri bwuzuye amasezerano cyangwa fagitire byatwara amasaha menshi mu cyumweru.",
            "features.documents.solution": "Sisitemu ya Bika yo gucunga inyandiko ihita ihura amafayiri n'ubucuruzi bijyanye n'abakiriya. Byose birarinzwe kandi birashakishwa, bivuze ko amasezerano ukeneye uyabona mu masegonda abiri gusa.",

            "features.back": "Subira ku biranga",
            "features.theProblem": "Ikibazo",
            "features.howBikaSolvesIt": "Uburyo Bika Ikikemura",
            "features.ready": "Witeguye guhindura ubucuruzi bwawe?",
            "features.readyDesc": "Injira mu bihumbi by'ubucuruzi bimaze gukura na Bika.",
            "features.getStarted": "Tangira ku buntu",

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
