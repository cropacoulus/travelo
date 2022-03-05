import Image from 'next/image'
import Container from 'components/Container'
import FooterInfo from './FooterInfo'
import styles from './Footer.module.css'
import traveloLogo from 'public/assets/travelo-logo-footer.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image
                            src={traveloLogo}
                            alt="Travelo Logo"
                            placeholder="blur"
                            width="98"
                            height="136"
                        />
                    </figure>

                    <div className="flex flex-1 justify-between ml-[106px]">
                        <FooterInfo
                            title="Info"
                            content={[
                                {
                                    label: 'Tentang Kami',
                                    href: '/'
                                },
                                {
                                    label: 'Testimonial',
                                    href: '/'
                                },
                                {
                                    label: 'Kontak',
                                    href: '/'
                                },
                            ]}
                        />
                        <FooterInfo
                            title="Perusahaan"
                            content={[
                                {
                                    label: 'Syarat & Ketentuan',
                                    href: '/'
                                },
                                {
                                    label: 'Kebijakan privasi',
                                    href: '/'
                                },
                                {
                                    label: 'Blog',
                                    href: '/'
                                },
                                {
                                    label: 'Bantuan Pelayanan',
                                    href: '/'
                                },
                            ]}
                        />
                        <FooterInfo
                            title="Kontak"
                            content={[
                                'Jl. Kramat 1 No. 20',
                                'Jakarta Timur, DKI Jakarta',
                                'Indonesia',
                                '(021) 9384834',
                                'travelo.service@help.com'
                            ]}
                        />
                    </div>
                </div>
            </Container>
            <div className="bg-blue-100 p-3">
                <p className="text-heading-5 text-white font-bold text-center">
                    Copyright 2022 Travelo. All Right Reserved.    
                </p>    
            </div>
        </footer>
    )
}

export default Footer