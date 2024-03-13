import dynamic from "next/dynamic";
// import SpecialCounterComponent from "@/components/pages/SpecialCounter";

const SpecialCounterComponent = dynamic(
    () => import("@/components/pages/SpecialCounter"),
    { ssr: false }
);

const SpecialCounter = () => {
    return (
        <div>
            <SpecialCounterComponent />
        </div>
    );
};
export default SpecialCounter;