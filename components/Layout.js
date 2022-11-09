import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <Head>
        <title>{title ? title + " - SellIt - " : " Phoenix"}</title>
        <meta name='description' content='Ecommerce App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between bg-slate-100'>
        <header>
          <nav className='flex h-12 justify-between items-center px-4 shadow-md bg-cyan-200'>
            <Link href='/'>
              <h2 className='text-lg font-bold'>Sell It</h2>
            </Link>
            <div className='flex'>
              <Link href='/cart'>
                <p className='p-2'>
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </p>
              </Link>
              <Link href='/login'>
                <p className='p-2'>Login</p>
              </Link>
            </div>
          </nav>
        </header>

        <main className='container m-auto  mt-4  px-4'>{children}</main>

        <footer
          className='flex h-10 justify-center items-center shadow-inner bg-cyan-200
        '
        >
          Copright @ 2022 Sell IT
        </footer>
      </div>
    </>
  );
}
