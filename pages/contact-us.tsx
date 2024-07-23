import React from 'react';
import Faq from '../components/Faq';
import OfficeSwiper from '../components/OfficeSwiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Link from 'next/link';
import Head from 'next/head';
import { ContactUsArt } from '../icons/Arts';
import FacebookButton from '../icons/FacebookButton';
import { FacebookUrl, InstagramUrl, TwitterUrl } from '../constants/info';
import InstagramButton from '../icons/InstagramButton';
import TwitterButton from '../icons/TwitterButton';
import { SocialButtonsType } from '../interfaces/ComponentInterfaces';

const SocialButtons: Array<SocialButtonsType> = [
    {
        name: "Facebook",
        link: FacebookUrl,
        component: FacebookButton
    },
    {
        name: "Twitter",
        link: TwitterUrl,
        component: TwitterButton
    },
    {
        name: "Instagram",
        link: InstagramUrl,
        component: InstagramButton
    }
]

const Contactus = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    return (
        <div>
            <Head>
                <title>Contáctanos | Tetra Technology</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Agenda una llamada</h6>
                                <h4 className="!text-white">Ponte en contacto con nosotros</h4>
                            </div>
                            <div className="relative mt-6 md:mt-0" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                <ContactUsArt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white/[55%] to-transparent py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h4 className="sm:!leading-[50px]">Nuestras redes</h4>
                            <ul className="mt-8 flex items-center justify-center gap-4 lg:justify-start" data-aos="fade-up" data-aos-duration="500">
                                {SocialButtons.map((e, key: any) => (
                                    <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" key={key}>
                                        <Link href={e.link} title={e.name} className="group">
                                            {React.createElement(e.component)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-gray-dark lg:w-2/3 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
                                        Full Name
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
                                        Email Address
                                    </label>
                                    <svg
                                        width="22"
                                        height="21"
                                        viewBox="0 0 22 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
                                        Mobile Number
                                    </label>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
                                        City
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mt-10">
                                <input
                                    type="text"
                                    name="message"
                                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label htmlFor="" className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white">
                                    Message
                                </label>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button type="button" className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="sm:!leading-[50px]">Canada Branch</h4>
                    </div>
                    <div className="mb-10 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8253)">
                                            <path
                                                d="M22.75 17.7883V21.619C22.7501 21.8933 22.6462 22.1574 22.4592 22.358C22.2722 22.5587 22.0161 22.681 21.7425 22.7002C21.2691 22.7327 20.8823 22.75 20.5833 22.75C11.0099 22.75 3.25 14.9901 3.25 5.41667C3.25 5.11767 3.26625 4.73092 3.29983 4.2575C3.31903 3.9839 3.4413 3.72776 3.64195 3.54078C3.84261 3.35379 4.10672 3.24988 4.381 3.25H8.21167C8.34604 3.24986 8.47567 3.29968 8.57537 3.38977C8.67507 3.47986 8.73773 3.6038 8.75117 3.7375C8.77608 3.98667 8.79883 4.18492 8.8205 4.3355C9.0358 5.838 9.477 7.29932 10.1292 8.66992C10.2321 8.88658 10.1649 9.1455 9.96992 9.28417L7.63208 10.9547C9.06149 14.2853 11.7158 16.9396 15.0464 18.369L16.7148 16.0355C16.7829 15.9402 16.8824 15.8718 16.9959 15.8423C17.1093 15.8128 17.2295 15.824 17.3355 15.8741C18.7059 16.525 20.1669 16.9651 21.6688 17.1795C21.8194 17.2012 22.0177 17.225 22.2647 17.2488C22.3982 17.2625 22.5218 17.3253 22.6117 17.425C22.7016 17.5246 22.7512 17.6541 22.7511 17.7883H22.75Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8253">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Call us</span>
                            </div>
                            <a
                                href="tel:(480) 555-0103"
                                className="font-bold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary lg:text-lg"
                            >
                                (480) 555-0103
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-primary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8262)">
                                            <path
                                                d="M3.24996 3.25H22.75C23.0373 3.25 23.3128 3.36414 23.516 3.5673C23.7192 3.77047 23.8333 4.04602 23.8333 4.33333V21.6667C23.8333 21.954 23.7192 22.2295 23.516 22.4327C23.3128 22.6359 23.0373 22.75 22.75 22.75H3.24996C2.96264 22.75 2.68709 22.6359 2.48393 22.4327C2.28076 22.2295 2.16663 21.954 2.16663 21.6667V4.33333C2.16663 4.04602 2.28076 3.77047 2.48393 3.5673C2.68709 3.36414 2.96264 3.25 3.24996 3.25ZM13.065 12.6566L6.11863 6.75783L4.71571 8.40883L13.079 15.5101L21.2918 8.40342L19.8748 6.76433L13.066 12.6566H13.065Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8262">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Mail us</span>
                            </div>
                            <a
                                href="mailto:michelle.rivera@example.com"
                                className="font-bold text-black transition hover:text-primary dark:text-white dark:hover:text-primary lg:text-lg"
                            >
                                michelle.rivera@example.com
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8282)">
                                            <path
                                                d="M19.8943 18.8122L13 25.7066L6.10567 18.8122C4.74212 17.4486 3.81354 15.7114 3.43734 13.8201C3.06114 11.9287 3.25423 9.96835 3.99219 8.18678C4.73015 6.4052 5.97983 4.88247 7.58321 3.81113C9.18658 2.73979 11.0716 2.16797 13 2.16797C14.9284 2.16797 16.8134 2.73979 18.4168 3.81113C20.0202 4.88247 21.2699 6.4052 22.0078 8.18678C22.7458 9.96835 22.9389 11.9287 22.5627 13.8201C22.1865 15.7114 21.2579 17.4486 19.8943 18.8122ZM13 14.0845C13.5746 14.0845 14.1257 13.8563 14.5321 13.4499C14.9384 13.0436 15.1667 12.4925 15.1667 11.9179C15.1667 11.3432 14.9384 10.7921 14.5321 10.3858C14.1257 9.97949 13.5746 9.75122 13 9.75122C12.4254 9.75122 11.8743 9.97949 11.4679 10.3858C11.0616 10.7921 10.8333 11.3432 10.8333 11.9179C10.8333 12.4925 11.0616 13.0436 11.4679 13.4499C11.8743 13.8563 12.4254 14.0845 13 14.0845Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8282">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Location</span>
                            </div>
                            <h5 className="font-bold text-black dark:text-white lg:text-lg">Ontario, Canada</h5>
                        </div>
                    </div>
                    <img src="/assets/images/canada-branch.png" alt="canada-branch" className="w-full" />
                </div>
            </section>

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="sm:!leading-[50px]">Australia Branch</h4>
                    </div>
                    <div className="mb-10 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8253)">
                                            <path
                                                d="M22.75 17.7883V21.619C22.7501 21.8933 22.6462 22.1574 22.4592 22.358C22.2722 22.5587 22.0161 22.681 21.7425 22.7002C21.2691 22.7327 20.8823 22.75 20.5833 22.75C11.0099 22.75 3.25 14.9901 3.25 5.41667C3.25 5.11767 3.26625 4.73092 3.29983 4.2575C3.31903 3.9839 3.4413 3.72776 3.64195 3.54078C3.84261 3.35379 4.10672 3.24988 4.381 3.25H8.21167C8.34604 3.24986 8.47567 3.29968 8.57537 3.38977C8.67507 3.47986 8.73773 3.6038 8.75117 3.7375C8.77608 3.98667 8.79883 4.18492 8.8205 4.3355C9.0358 5.838 9.477 7.29932 10.1292 8.66992C10.2321 8.88658 10.1649 9.1455 9.96992 9.28417L7.63208 10.9547C9.06149 14.2853 11.7158 16.9396 15.0464 18.369L16.7148 16.0355C16.7829 15.9402 16.8824 15.8718 16.9959 15.8423C17.1093 15.8128 17.2295 15.824 17.3355 15.8741C18.7059 16.525 20.1669 16.9651 21.6688 17.1795C21.8194 17.2012 22.0177 17.225 22.2647 17.2488C22.3982 17.2625 22.5218 17.3253 22.6117 17.425C22.7016 17.5246 22.7512 17.6541 22.7511 17.7883H22.75Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8253">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Call us</span>
                            </div>
                            <a
                                href="tel:(08) 9082 3286"
                                className="font-bold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary lg:text-lg"
                            >
                                (08) 9082 3286
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-primary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8262)">
                                            <path
                                                d="M3.24996 3.25H22.75C23.0373 3.25 23.3128 3.36414 23.516 3.5673C23.7192 3.77047 23.8333 4.04602 23.8333 4.33333V21.6667C23.8333 21.954 23.7192 22.2295 23.516 22.4327C23.3128 22.6359 23.0373 22.75 22.75 22.75H3.24996C2.96264 22.75 2.68709 22.6359 2.48393 22.4327C2.28076 22.2295 2.16663 21.954 2.16663 21.6667V4.33333C2.16663 4.04602 2.28076 3.77047 2.48393 3.5673C2.68709 3.36414 2.96264 3.25 3.24996 3.25ZM13.065 12.6566L6.11863 6.75783L4.71571 8.40883L13.079 15.5101L21.2918 8.40342L19.8748 6.76433L13.066 12.6566H13.065Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8262">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Mail us</span>
                            </div>
                            <a
                                href="mailto:michelle.rivera@example.com"
                                className="font-bold text-black transition hover:text-primary dark:text-white dark:hover:text-primary lg:text-lg"
                            >
                                michelle.rivera@example.com
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8282)">
                                            <path
                                                d="M19.8943 18.8122L13 25.7066L6.10567 18.8122C4.74212 17.4486 3.81354 15.7114 3.43734 13.8201C3.06114 11.9287 3.25423 9.96835 3.99219 8.18678C4.73015 6.4052 5.97983 4.88247 7.58321 3.81113C9.18658 2.73979 11.0716 2.16797 13 2.16797C14.9284 2.16797 16.8134 2.73979 18.4168 3.81113C20.0202 4.88247 21.2699 6.4052 22.0078 8.18678C22.7458 9.96835 22.9389 11.9287 22.5627 13.8201C22.1865 15.7114 21.2579 17.4486 19.8943 18.8122ZM13 14.0845C13.5746 14.0845 14.1257 13.8563 14.5321 13.4499C14.9384 13.0436 15.1667 12.4925 15.1667 11.9179C15.1667 11.3432 14.9384 10.7921 14.5321 10.3858C14.1257 9.97949 13.5746 9.75122 13 9.75122C12.4254 9.75122 11.8743 9.97949 11.4679 10.3858C11.0616 10.7921 10.8333 11.3432 10.8333 11.9179C10.8333 12.4925 11.0616 13.0436 11.4679 13.4499C11.8743 13.8563 12.4254 14.0845 13 14.0845Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8282">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Location</span>
                            </div>
                            <h5 className="font-bold text-black dark:text-white lg:text-lg">Coolumburra, Australia</h5>
                        </div>
                    </div>
                    <img src="/assets/images/canada-branch.png" alt="canada-branch" className="w-full" />
                </div>
            </section>

            <OfficeSwiper />

            <Faq showTitle={true} />

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Pricing Plan</h6>
                        <h4>Choose Affordable Prices</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col group rounded-3xl border-2 border-primary bg-white p-6 px-4 transition hover:bg-primary hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-8">
                                <h3 className="text-[22px] font-black text-black dark:text-white">Intro</h3>
                            </div>
                            <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Daily content updates</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Unlimited downloads of FREE resources</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Unlimited PREMIUM downloads</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Valid commercial licenses</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                                <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                            </g>
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Advanced Search</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                                <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                            </g>
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">No attribution required</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                                <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                            </g>
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Browse with no ads</p>
                                </li>
                            </ul>
                            <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-primary group-hover:text-white group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                        Monthly
                                    </div>
                                    <Link href="#" className="btn text-xl text-white group-hover:bg-white group-hover:text-primary dark:text-black xl:w-44">
                                        $39.99<small className="text-xs lowercase">/month</small>
                                    </Link>
                                </div>
                                <span className="block text-center text-sm font-bold text-black dark:text-white ltr:sm:pr-5 ltr:sm:text-right rtl:sm:pl-5 rtl:sm:text-left">
                                    Billed every month
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col group rounded-3xl border-2 border-secondary bg-white p-6 px-4 transition hover:bg-secondary hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative mb-8">
                                <h3 className="text-[22px] font-black text-black dark:text-white">Base</h3>
                                <div className="group-hover:white/10 absolute top-1/2 -translate-y-1/2 rounded-xl bg-secondary/10 py-2 px-4 text-xs font-black text-secondary group-hover:bg-white group-hover:text-black ltr:right-0 rtl:left-0">
                                    MOST POPULAR
                                </div>
                            </div>
                            <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Daily content updates</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Unlimited downloads of FREE resources</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Unlimited PREMIUM downloads</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Valid commercial licenses</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Advanced Search</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">No attribution required</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Browse with no ads</p>
                                </li>
                            </ul>
                            <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-secondary group-hover:text-white group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                        Yearly
                                    </div>
                                    <Link
                                        href="#"
                                        className="btn bg-secondary text-xl text-white group-hover:bg-white group-hover:text-secondary dark:text-black xl:w-44"
                                    >
                                        $14.99<small className="text-xs">/month</small>
                                    </Link>
                                </div>
                                <span className="block text-center text-sm font-bold text-black dark:text-white ltr:sm:pr-5 ltr:sm:text-right rtl:sm:pl-5 rtl:sm:text-left">
                                    $179.00 every 12 months
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col group rounded-3xl border-2 border-black bg-white p-6 px-4 transition hover:bg-black hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-8">
                                <h3 className="text-[22px] font-black text-black group-hover:text-white dark:text-white">Pro</h3>
                            </div>
                            <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Daily content updates</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Unlimited downloads of FREE resources</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Unlimited PREMIUM downloads</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Valid commercial licenses</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Advanced Search</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">No attribution required</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Browse with no ads</p>
                                </li>
                            </ul>
                            <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-black group-hover:text-gray group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                        Yearly
                                    </div>
                                    <Link href="#" className="btn bg-black text-xl text-white group-hover:bg-white group-hover:text-black xl:w-44">
                                        $499
                                    </Link>
                                </div>
                                <span className="block text-center text-sm font-bold text-black group-hover:text-white dark:text-white ltr:sm:pr-5 ltr:sm:text-right rtl:sm:pl-5 rtl:sm:text-left">
                                    Billed once only
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-white/40 to-transparent py-14 dark:from-white/[0.03] lg:py-[100px]">
                <div className="container">
                    <div className="mx-auto text-center sm:w-[430px]">
                        <div className="heading mb-6">
                            <h4>Start your free trial</h4>
                        </div>
                        <p className="text-lg font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="mt-12 flex items-center justify-between gap-4 font-extrabold sm:gap-7">
                            <Link href="/" className="btn w-full bg-secondary text-base capitalize text-white hover:bg-gray/10 hover:text-gray sm:text-lg">
                                Get Started
                            </Link>
                            <Link href="/about-us" className="btn w-full bg-gray/10 text-base capitalize text-gray sm:text-lg">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contactus;
