import { MainScreen } from '@/components/mainScreen';
import { Logo } from '@/components/logo';
import { SelfProduction } from '@/components/selfProduction';
import { Contacts } from '@/components/contacts';
import { Catalog } from '@/components/catalog';
import { Works } from '@/components/works';
import { Advantages } from '@/components/advantages';
import { Price } from '@/components/price';
import { Videos } from '@/components/videos';
import { PageContacts } from '@/components/pageContacts/pageContacts';
import { YandexMap } from '@/components/map';
import { Footer } from '@/components/footer';
import useMatchMedia from '@/core/hooks/useMatchMedia';
import { Header } from '@/components/header';

const RootLayout = () => {
    const { isDesktop, isTablet, isMobile } = useMatchMedia();
    return (
        <div className="_container-default">
            <main>
                {isMobile && <Header />}
                <MainScreen />
                <Catalog />
                <Works />
                <Advantages />
                <Price />
                {/*<Videos />*/}
                <PageContacts />
                <YandexMap />
                <Footer />
            </main>
            {!isMobile && (
                <div id="sidebarWrapper">
                    <div id="sidebar">
                        <Logo />
                        <SelfProduction />
                        <Contacts />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RootLayout;
