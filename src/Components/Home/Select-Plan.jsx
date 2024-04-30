import * as React from "react";
import image1 from '../../Assets/Images/best value.png';
import image from '../../Assets/Images/plan-center-img.png';
import Heading from "../Heading";
import Button from "../Button";


const PlanCard = ({ title, subtitle, price, description, buttonText, isPopular, isYearly }) => (
    <div
        className={`relative flex flex-col justify-end  sm:px-4 px-8 py-8 my-auto w-full max-w-sm text-lg ${isPopular ? " plans-bg-center " : "bg-white"
            } rounded-2xl`}
    >
        {isPopular && (
            <div className="absolute top-0 right-0 z-20 ">
                <img
                    loading="lazy"
                    src={image1}
                    alt="Decorative image"
                    className="best-value"
                />
            </div>
        )}
        <div
            className={`self-center text-3xl font-bold font-Inter ${isPopular ? "text-white" : "test-shadow"
                }`}
        >
            {title}
        </div>
        <div
            className={`self-center  mt-2 text-center text-sm font-poppins ${isPopular ? "text-white" : "test-shadow"
                }`}
        >
            {subtitle}
        </div>
        <div className={` text-3xl font-bold font-Inter font-bold py-8 ${isPopular ? "text-white" : "text-gray-800"}`}>
            {price}
        </div>
        <div className={` text-center font-normal font-Inter ${isPopular ? "text-white" : "text-gray-800"}`}>
            {description}
        </div>
        <div>
            {isPopular ? <button className="justify-center items-center px-12 py-4 my-2 font-semibold text-center bg-white shadow-lg text-purple-600 rounded-full w-[100%]">
            Get started
            </button> : 
            <div className="justify-center sm:self-start self-center  m-2 font-semibold tracking-normal text-black  rounded-[1000px] ">
                <Button btnText="Get Started" />
            </div>}

        </div>
        {/* <button
            className={`justify-center items-center px-12 py-4 my-2 font-semibold text-center ${isPopular
                ? "bg-white shadow-lg text-purple-600"
                : "text-white bg-gradient-to-b plans-bg-center to-blue-500"
                } rounded-full`}
        >
            {buttonText}
        </button> */}
        <div className={`text-center font-Inter font-normal  ${isPopular ? "text-white" : "text-gray-800"}`}>
            <span>You are free to</span>{" "}
            <span className="font-medium text-red-600">cancel any time</span>
        </div>
        {isPopular && (
            <div className=" self-center">
                <img
                    loading="lazy"
                    src={image}
                    alt="Decorative image"
                    className="plan-image self-center mt-4 ml-8 max-w-full shadow-sm aspect-[1.41] w-[168px]"
                />
            </div>
        )}
    </div>
);

const plans = [
    {
        title: "Monthly",
        subtitle: "7-days free Trial",
        price: "$0.00/month",
        description: "Take as a Monthly Payment of $0.0",
        buttonText: "Get started",
        isPopular: false,
        isYearly: false,
    },
    {
        title: "Yearly",
        subtitle: "7-days free Trial",
        price: "$0.00/12-months",
        description: "Take as a Yearly Payment of $0.0",
        buttonText: "Get started",
        isPopular: true,
        isYearly: true,
    },
    {
        title: "Half-Yearly",
        subtitle: "7-days free Trial",
        price: "$0.00/06-months",
        description: "Take as a Half-Yearly Payment of $0.0",
        buttonText: "Get started",
        isPopular: false,
        isYearly: false,
    },
];

function SelectPlan() {
    return (
        <main className="flex flex-col items-center justify-center ">

            <div className="py-8">
                <Heading blueText=" Select Your" whiteText="Perfect Plan" />
            </div>
            <section className="grid gap-7 md:grid-cols-3 p-6">
                {plans.map((plan, index) => (
                    <PlanCard key={index} {...plan} />
                ))}
            </section>
        </main>
    );
}
export default SelectPlan;
