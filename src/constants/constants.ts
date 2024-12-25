import { BookText, Cloud, CodeXml, House, LogOut, Phone, Settings } from "lucide-react";

export type cardStatsProps = {
     value: string;
     title: string;
}

export const cardStats: cardStatsProps[] = [
     {
          title: "Language Support",
          value: "30+"
     },
     {
          title: "Developers",
          value: "10k+"
     },
     {
          title: "Hours Saved",
          value: "100k+"
     },
]

export type signinMethodsProps = {
     title: string;
     icon: string;
}

export const SAASSigninMethods: signinMethodsProps[] = [
     {
          title: "Sign in with Github",
          icon: "/assets/icons/github.png"
     },
     {
          title: "Sign in with Bitbucket",
          icon: "/assets/icons/Bitbucket.png"
     },
     {
          title: "Sign in with Azure Devops",
          icon: "/assets/icons/azure-devops.png"
     },
     {
          title: "Sign in with GitLab",
          icon: "/assets/icons/gitlab.png"
     },
]

export const SelfHostedSigninMethods: signinMethodsProps[] = [
     {
          title: "Self Hosted GitLab",
          icon: "assets/icons/gitlab.png"
     },
     {
          title: "Sign in with SSO",
          icon: "assets/icons/sso.png"
     }
]

export type navItemsType = {
     name: string;
     icon: React.ComponentType<{ className?: string }>;
     section: "main" | "footer";
};

export const navItems: navItemsType[] = [
     { name: "Repositories", icon: House, section: "main" },
     { name: "AI Code Review", icon: CodeXml, section: "main" },
     { name: "Cloud Security", icon: Cloud, section: "main" },
     { name: "How to Use", icon: BookText, section: "main" },
     { name: "Settings", icon: Settings, section: "main" },
     { name: "Support", icon: Phone, section: "footer" },
     { name: "Logout", icon: LogOut, section: "footer" },
];


export type repositoryDetailType = {
     title: string;
     status: "Public" | "Private";
     techTools: string;
     size: number;
     time: number;
}

export const repositoryDetails: repositoryDetailType[] = [
     {
          title: "design-system",
          status: 'Public',
          techTools: 'React',
          size: 7320,
          time: 1,
     },
     {
          title: "codeant-ci-app",
          status: 'Private',
          techTools: 'Javascript',
          size: 5871,
          time: 2,
     },
     {
          title: "analytics-dashboard",
          status: 'Private',
          techTools: 'Python',
          size: 7320,
          time: 5,
     },
     {
          title: "mobile-app",
          status: 'Public',
          techTools: 'Swift',
          size: 3096,
          time: 3,
     },
     {
          title: "e-commerce-platform",
          status: 'Private',
          techTools: 'Python',
          size: 6210,
          time: 6,
     },
     {
          title: "blog-website",
          status: 'Public',
          techTools: 'HTML/CSS',
          size: 1876,
          time: 4,
     },
     {
          title: "social-network",
          status: 'Private',
          techTools: 'PHP',
          size: 5432,
          time: 7,
     },
]