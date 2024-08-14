import dynamic from "next/dynamic";

const HomeA = dynamic(() => import("modulaA/home"), {
  ssr: false,
});

export default function Page() {
  return <HomeA />;
}
