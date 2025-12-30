import { MainScreen } from '@/components/mainScreen';
import { Logo } from '@/components/logo';
import { SelfProduction } from '@/components/selfProduction';
import { Contacts } from '@/components/contacts';
import { Catalog } from '@/components/catalog';
import { Works } from '@/components/works';

const RootLayout = () => {
    return (
        <div className="_container-default">
            <main>
                <MainScreen />
                <Catalog />
                <Works />
            </main>
            <div id="sidebarWrapper">
                <div id="sidebar">
                    <Logo />
                    <SelfProduction />
                    <Contacts />
                </div>
            </div>
        </div>
    );
};

export default RootLayout;
