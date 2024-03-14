import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import classNames from "classnames/bind";
import style from './style.module.scss'
import { useRouter } from "next/router";
const cx = classNames.bind(style)

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cx('index')}>
        <div onClick={() => router.push('/counter')} className={cx('index-navigation')}>go to Counter</div>
        <div onClick={() => router.push('/todolist')} className={cx('index-navigation')}>go to todolist</div>
        <div onClick={() => router.push('/special-counter')} className={cx('index-navigation')}>go to special-counter</div>
      </div>
    </>
  );
}
