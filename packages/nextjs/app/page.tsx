"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { address } = useAccount();
  return (
    <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      <div className="h-10 md:h-20"></div>

      <p className="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
        Dive into the Fun of Charades with a Blockchain Twist
      </p>
      <div className="h-10"></div>
      <p className="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl mb-6">
        Experience the classic game of Charades like never before, with secure and transparent gameplay on the
        blockchain. This is your gateway to a unique, on-chain charades experience!
      </p>
      {address ? (
        <Link className="bg-white px-4 py-1 rounded-2xl  text-black" href="/gameplay">
          Get Started
        </Link>
      ) : (
        <p>Connect your walle to play</p>
      )}

      <div className="h-32 md:h-40"></div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
            Simple and Fun
          </p>
          <h2 className="text-4xl font-bold">Perfect for Teams and Groups</h2>
          <div className="h-6"></div>
          <p className="font-serif text-xl text-gray-400 md:pr-10">
            Jump into the action with your friends and family! Describe, guess, and score in a fully on-chain game that
            ensures fairness and fun with every round.
          </p>
          <div className="h-8"></div>
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
            <div>
              <p className="font-semibold text-gray-400">Blockchain Transparency</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Enjoy a game where every move and score is recorded securely on the blockchain, ensuring fairness and
                integrity.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-400">Easy to Get Started</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Set up your game quickly and start playing! No complicated setup required—just fun and excitement.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
        </div>
      </div>

      <div className="h-32 md:h-40"></div>

      <p className="font-serif text-4xl">
        <span className="text-gray-400">Join the Fun</span>
        <span className="text-gray-600">
          and experience charades like never before, where every word and guess is part of a secure and transparent
          game!
        </span>
      </p>

      <div className="h-32 md:h-40"></div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
            1
          </p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">Secure and Transparent Gameplay</p>
        </div>
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
            2
          </p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">Engage in Exciting Charades Rounds</p>
        </div>
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
            3
          </p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">Simple Setup, Endless Fun</p>
        </div>
      </div>

      <div className="h-40"></div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col justify-center md:col-span-2">
          <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
            Join Us Today
          </p>
          <h2 className="text-4xl font-bold">Start Playing Charades on the Blockchain</h2>
          <div className="h-6"></div>
          <p className="font-serif text-xl text-gray-400 md:pr-10">
            Dive into the game where every round is secure and every guess is part of the fun. Experience the future of
            gaming with blockchain technology.
          </p>
          <div className="h-8"></div>
          <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-gray-400">Innovative Gaming</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Be part of the next generation of gaming with blockchain innovation driving every round.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-400">Fast and Fair</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Enjoy a fast-paced game with fair play guaranteed by blockchain transparency.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-400">Ready to Play</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Get started quickly and enjoy a seamless gaming experience with our user-friendly platform.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
        </div>
      </div>

      <div className="h-10 md:h-40"></div>
    </div>
  );
};

export default Home;
