
import {
    Package,
    TrendingUp,
    Receipt,
    Wallet,
    FileText
} from 'lucide-react';

export const features = [
    {
        slug: "inventory",
        icon: Package,
        title: "Inventory Tracking",
        titleKey: "features.inventory.title",
        descKey: "features.inventory.desc",
        longDescKey: "features.inventory.longDesc",
        problemKey: "features.inventory.problem",
        solutionKey: "features.inventory.solution"
    },
    {
        slug: "sales",
        icon: TrendingUp,
        title: "Sales Management",
        titleKey: "features.sales.title",
        descKey: "features.sales.desc",
        longDescKey: "features.sales.longDesc",
        problemKey: "features.sales.problem",
        solutionKey: "features.sales.solution"
    },
    {
        slug: "expenses",
        icon: Receipt,
        title: "Expense Tracking",
        titleKey: "features.expenses.title",
        descKey: "features.expenses.desc",
        longDescKey: "features.expenses.longDesc",
        problemKey: "features.expenses.problem",
        solutionKey: "features.expenses.solution"
    },
    {
        slug: "finance",
        icon: Wallet,
        title: "Finance & Accounting",
        titleKey: "features.finance.title",
        descKey: "features.finance.desc",
        longDescKey: "features.finance.longDesc",
        problemKey: "features.finance.problem",
        solutionKey: "features.finance.solution"
    },
    {
        slug: "documents",
        icon: FileText,
        title: "Document Management",
        titleKey: "features.documents.title",
        descKey: "features.documents.desc",
        longDescKey: "features.documents.longDesc",
        problemKey: "features.documents.problem",
        solutionKey: "features.documents.solution"
    }
];
