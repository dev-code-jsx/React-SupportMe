import React, { useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { Avatar } from './Avatar';
import { AvatarFallback } from './AvatarFallback';
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiListBullet } from "react-icons/hi2";
import logo from '../assets/img/logo.jpeg'

const Sheet = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {React.Children.map(children, child =>
                React.cloneElement(child, { isOpen, setIsOpen })
            )}
        </div>
    );
};

const SheetTrigger = ({ asChild, isOpen, setIsOpen, children }) => {
    const trigger = React.cloneElement(children, {
        onClick: () => setIsOpen(!isOpen)
    });

    return asChild ? trigger : <button onClick={() => setIsOpen(!isOpen)}>{trigger}</button>;
};

const SheetContent = ({ side, className, isOpen, children }) => {
    return isOpen ? (
        <div className={`fixed ${side} ${className}`}>
            {children}
        </div>
    ) : null;
};

const SidebarLayout = ({ links, avatarName, avatarUsername }) => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen">
            <aside className="hidden w-64 flex-col border-r bg-background p-4 lg:flex fixed top-0 bottom-0">
                <div className="mb-6 flex items-center gap-2">
                    <Link to="/">
                        <img src={logo} alt="Acme Inc" width={24} height={24} className="h-6 w-6" />
                        <span className="sr-only">SupportMe</span>
                    </Link>
                </div>
                <nav className="flex flex-col space-y-1">
                    {links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(link.href)}
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                        >
                            {link.icon && <link.icon className="h-5 w-5" />}
                            {link.label}
                        </button>
                    ))}
                </nav>
                <div className="mt-auto flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback>{avatarName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 truncate">
                        <div className="font-medium">{avatarName}</div>
                        <div className="text-muted-foreground">{avatarUsername}</div>
                    </div>
                    <button
                        onClick={() => console.log('Logout')}
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <HiMiniArrowRightEndOnRectangle className="h-5 w-5" />
                        <span className="sr-only">Logout</span>
                    </button>
                </div>
            </aside>
            <div className="flex flex-1 flex-col lg:ml-64">
                <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 shadow-sm sm:px-6 lg:hidden">
                    <Link to="/">
                        <img src={logo} alt="Acme Inc" width={24} height={24} className="h-6 w-6" />
                        <span className="sr-only">SupportMe</span>
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                            >
                                <HiListBullet className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="fixed top-0 left-0 h-full w-64 bg-background overflow-y-auto z-40"
                            style={{ maxWidth: '100%' }}
                        >
                            <div className="flex flex-col space-y-6 p-4">
                                <div className="mb-6 flex items-center gap-2">
                                    <Link to="/">
                                        <img src={logo} alt="Acme Inc" width={24} height={24} className="h-6 w-6" />
                                        <span className="sr-only">SupportMe</span>
                                    </Link>
                                </div>
                                <nav className="flex flex-col space-y-1">
                                    {links.map((link, index) => (
                                        <button
                                            key={index}
                                            onClick={() => navigate(link.href)}
                                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                                        >
                                            {link.icon && <link.icon className="h-5 w-5" />}
                                            {link.label}
                                        </button>
                                    ))}
                                </nav>
                                <div className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>{avatarName[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 truncate">
                                        <div className="font-medium">{avatarName}</div>
                                        <div className="text-muted-foreground">@{avatarUsername}</div>
                                    </div>
                                    <button
                                        onClick={() => console.log('Logout')}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                                    >
                                        <HiMiniArrowRightEndOnRectangle className="h-5 w-5" />
                                        <span className="sr-only">Logout</span>
                                    </button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </header>
                <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
                    {/* Aquí se pintan los componentes según la ruta que definamos, recuerden agregar bien la ruta */}
                    <Outlet /> {/* Aquí se van a renderizar los componentes según la ruta que pongamos */}
                </main>
            </div>
        </div>
    );
};

export { Sheet, SheetTrigger, SheetContent, SidebarLayout };
