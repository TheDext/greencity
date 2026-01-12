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
import { useModalStore } from '@/core/store/modal.store';
import { InfoModal } from '@/components/infoModal';

const RootLayout = () => {
    const { isMobile } = useMatchMedia();
    const {
        showModal,
        showInfoModal,
        setShowModal,
        current,
        setCurrent,
        slideId,
        setSlideId,
        setShowInfoModal,
    } = useModalStore();

    useEffect(() => {
        if (showModal || showInfoModal) {
            bodyLock.enable();
        } else {
            bodyLock.disable();
        }
    }, [showModal, showInfoModal]);

    return (
        <div className="_container-default">
            <main>
                {isMobile && <Header />}
                <MainScreen />
                <Catalog setShowInfoModal={setShowInfoModal} />
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
                        <h1 className="note">Магазин цветов и растений</h1>
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
            {showInfoModal && <InfoModal setShowInfoModal={setShowInfoModal} />}
        </div>
    );
};

export default RootLayout;
