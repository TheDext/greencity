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
import { useEffect, useState } from 'react';
import { Modal } from '@/components/modal';
import { useLockBodyScroll } from 'react-use';
import { bodyLock } from '@/shared/lib/bodyLock';

const RootLayout = () => {
    const { isDesktop, isTablet, isMobile } = useMatchMedia();
    const [showModal, setShowModal] = useState(false);
    const [current, setCurrent] = useState(null);
    const [slideId, setSlideId] = useState(null);

    useEffect(() => {
        if (showModal) {
            bodyLock.enable();
        } else {
            bodyLock.disable();
        }
    }, [showModal]);

    return (
        <div className="_container-default">
            <main>
                {isMobile && <Header />}
                <MainScreen />
                <Catalog />
                <Works
                    setCurrent={setCurrent}
                    setShowModal={setShowModal}
                    setSlideId={setSlideId}
                />
                <Advantages />
                <Price />
                <Videos />
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
            {showModal && (
                <Modal
                    current={current}
                    setShowModal={setShowModal}
                    slideId={slideId}
                />
            )}
        </div>
    );
};

export default RootLayout;
