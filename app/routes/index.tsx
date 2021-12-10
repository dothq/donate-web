import React from "react";
import { Link, MetaFunction } from "remix";
import { useLoaderData } from "remix";
import { Header } from "~/components/Header";
import { LinkButton } from "~/components/LinkButton";
import { DonationFrequency, DonationMethod } from "~/util/donation";

const Home = () => {
    const data = useLoaderData();

    const [paymentMethod, setPaymentMethod] = React.useState(DonationMethod.Stripe);
    const [donationFrequency, setDonationFrequency] = React.useState(DonationFrequency.Monthly);
    const [amount, setAmount] = React.useState(10);

    return (
        <div className={"flex flex-col divide-y divide-gray-200"}>
            <section id={"landing-hero"} className={"w-full h-4/5 flex items-center justify-center py-40 flex-col gap-6 px-4 lg:px-0"}>
                <h1 className={"text-5xl max-w-sm md:max-w-full md:text-6xl font-bold text-center"}>Privacy is a right, not a privilage.</h1>
                <p className={"text-xl max-w-xl md:text-3xl md:max-w-2xl text-center text-gray-700"}>Donating helps support our mission of providing privacy-focused products and services to all.</p>
            
                <div className={"flex transform scale-125 mt-12"}>
                    <LinkButton to={"/#donate"}>Donate Now</LinkButton>
                </div>
            </section>
            <section id={"why-hero"} className={"w-full h-4/5 flex items-center justify-center py-20 flex-col gap-20 px-4 lg:px-0"}>
                <h1 className={"text-3xl max-w-sm md:max-w-full md:text-4xl font-bold text-center"}>Why should I donate?</h1>
                
                <div className={"flex flex-row gap-16"}>
                    <article className={"flex justify-center flex-col gap-1 items-center max-w-xs text-center"}>
                        <span className={"text-6xl mb-6 select-none"}>🏦</span>
                        <h1 className={"text-2xl font-semibold"}>Funded from our own pockets</h1>
                        <p className={"text-lg text-gray-700"}>Our servers and development is funded by our own spare change.</p>
                    </article>

                    <article className={"flex justify-center flex-col gap-1 items-center max-w-xs text-center"}>
                        <span className={"text-6xl mb-6 select-none"}>🚀</span>
                        <h1 className={"text-2xl font-semibold"}>Supports our mission</h1>
                        <p className={"text-lg text-gray-700"}>Your donation will go toward producing privacy-focused products and services.</p>
                    </article>

                    <article className={"flex justify-center flex-col gap-1 items-center max-w-xs text-center"}>
                        <span className={"text-6xl mb-6 select-none"}>😎</span>
                        <h1 className={"text-2xl font-semibold"}>Get cool swag for supporting</h1>
                        <p className={"text-lg text-gray-700"}>Donators receive stickers, shirts and more by reaching a donation goal.</p>
                    </article>
                </div>
            </section>
            <section id={"donate"} className={"w-full h-4/5 flex items-center justify-center py-20 flex-col gap-16 px-4 lg:px-0"}>
                <h1 className={"text-3xl max-w-sm md:max-w-full md:text-4xl font-bold text-center"}>Make a donation to Dot HQ</h1>
                
                <fieldset className={"flex gap-5 flex-col max-w-md w-full items-center"}>
                    <label className={"font-semibold text-xl text-gray-800"}>Payment method</label>
                    <div className={"flex gap-3"}>
                        <LinkButton 
                            className={paymentMethod !== DonationMethod.Stripe
                                ? `opacity-50`
                                : `bg-black text-white`}
                                onClick={() => {
                                    setPaymentMethod(DonationMethod.Stripe)
                                    setDonationFrequency(DonationFrequency.Monthly)
                                }}
                        >
                            Credit/Debit
                        </LinkButton>
                        <LinkButton 
                            className={paymentMethod !== DonationMethod.Cryptocurrency
                                ? `opacity-50`
                                : `bg-black text-white`}
                            onClick={() => {
                                setPaymentMethod(DonationMethod.Cryptocurrency)
                                setDonationFrequency(DonationFrequency.Once)
                            }}
                        >
                            Cryptocurrency
                        </LinkButton>
                    </div>
                    
                    {paymentMethod == DonationMethod.Cryptocurrency && <Link to={"/supported-crypto"} className={`font-semibold text-lg text-blue-500 underline`}>Supported Cryptocurrencies</Link>}
                </fieldset>

                <fieldset className={"flex gap-5 flex-col max-w-md w-full items-center"}>
                    <label className={"font-semibold text-xl text-gray-800"}>How often do you want to donate?</label>
                    <div className={"flex gap-0"}>
                        <LinkButton 
                            title={paymentMethod == DonationMethod.Cryptocurrency ? `Monthly payments unavailable with cryptocurrency.` : ``}
                            className={`${donationFrequency !== DonationFrequency.Monthly
                                ? `opacity-50`
                                : `bg-black text-white`}
                                
                            ${paymentMethod !== DonationMethod.Stripe ? `opacity-25 cursor-not-allowed hover:bg-transparent hover:text-black` : ``}`}
                            onClick={() => {
                                if(paymentMethod == DonationMethod.Stripe) {
                                    setDonationFrequency(DonationFrequency.Monthly)
                                }
                            }}
                        >
                            Monthly
                        </LinkButton>
                        <LinkButton 
                            className={donationFrequency !== DonationFrequency.Once
                                ? `opacity-50`
                                : `bg-black text-white`}
                            onClick={() => setDonationFrequency(DonationFrequency.Once)}
                        >
                            One-time
                        </LinkButton>
                    </div>
                    {paymentMethod == DonationMethod.Cryptocurrency && <label className={"text-lg text-gray-800"}>Monthly payments are unavailable with cryptocurrency.</label>}
                </fieldset>

                <fieldset className={"flex gap-5 flex-col max-w-3xl w-full items-center"}>
                    <label className={"font-semibold text-xl text-gray-800"}>How much do you want to donate?</label>
                    <div className={"flex gap-3 flex-wrap items-center justify-center"}>
                        <LinkButton onClick={() => setAmount(5)} className={`w-40 ${amount == 5 ? `bg-black text-white` : ``}`}>
                            £5 {donationFrequency == DonationFrequency.Monthly ? `per month` : ``}
                        </LinkButton>
                        <LinkButton onClick={() => setAmount(10)} className={`w-40 ${amount == 10 ? `bg-black text-white` : ``}`}>
                            £10 {donationFrequency == DonationFrequency.Monthly ? `per month` : ``}
                        </LinkButton>
                        <LinkButton onClick={() => setAmount(30)} className={`w-40 ${amount == 30 ? `bg-black text-white` : ``}`}>
                            £30 {donationFrequency == DonationFrequency.Monthly ? `per month` : ``}
                        </LinkButton>
                        <LinkButton onClick={() => setAmount(50)} className={`w-40 ${amount == 50 ? `bg-black text-white` : ``}`}>
                            £50 {donationFrequency == DonationFrequency.Monthly ? `per month` : ``}
                        </LinkButton>
                        <LinkButton onClick={() => setAmount(75)} className={`w-40 ${amount == 75 ? `bg-black text-white` : ``}`}>
                            £75 {donationFrequency == DonationFrequency.Monthly ? `per month` : ``}
                        </LinkButton>
                        <LinkButton onClick={() => setAmount(100)} className={`w-40 ${amount == 100 ? `bg-black text-white` : ``}`}>
                            £100 {donationFrequency == DonationFrequency.Monthly ? `per month` : ``}
                        </LinkButton>
                        <LinkButton onClick={() => setAmount(200)} className={`w-40 ${amount == 200 ? `bg-black text-white` : ``}`}>
                            £200 {donationFrequency == DonationFrequency.Monthly ? `per month` : ``}
                        </LinkButton>
                        <input 
                            placeholder={"Custom Amount"} 
                            type={"number"}
                            className={"w-40 border text-center font-semibold items-center justify-center border-black px-5 py-3 outline-none"}
                            onKeyDown={(e: any) => setAmount(e.target.valueAsNumber)}
                        >
                            
                        </input>
                    </div>
                </fieldset>
            </section>
            <section id={"swag-hero"} className={"w-full h-4/5 flex items-center justify-center py-20 flex-col gap-20 px-4 lg:px-0"}>
                <h1 className={"text-3xl max-w-sm md:max-w-full md:text-4xl font-bold text-center"}>Donation Rewards</h1>
                
                <div className={"flex flex-row gap-16"}>
                    <article className={"flex justify-center flex-col gap-1 items-center max-w-xs text-center"}>
                        <img src={"/images/stickers.png"}></img>
                        <h1 className={"text-2xl font-semibold"}>Unlocked at £5</h1>
                        <p className={"text-lg text-gray-700"}>Dot HQ stickers.</p>
                    </article>

                    <article className={"flex justify-center flex-col gap-1 items-center max-w-xs text-center"}>
                        <img src={"/images/shirt.png"}></img>
                        <h1 className={"text-2xl font-semibold"}>Unlocked at £10</h1>
                        <p className={"text-lg text-gray-700"}>"Privacy is a right, not a privilage" limited-edition shirt.</p>
                    </article>

                    <article className={"flex justify-center flex-col gap-1 items-center max-w-xs text-center"}>
                        <img src={"/images/mask.png"}></img>
                        <h1 className={"text-2xl font-semibold"}>Unlocked at £30</h1>
                        <p className={"text-lg text-gray-700"}>Stay protected with this "net-mask" face mask.</p>
                    </article>

                    <article className={"flex justify-center flex-col gap-1 items-center max-w-xs text-center"}>
                        <img src={"/images/backpack.png"}></img>
                        <h1 className={"text-2xl font-semibold"}>Unlocked at £100</h1>
                        <p className={"text-lg text-gray-700"}>Store your gear in our Dot HQ backpack.</p>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Home;