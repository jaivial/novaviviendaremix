// app/routes/cardtitle.tsx
import React from "react";
import { CardInfo, cardsInfo } from "~/data/cards";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { DynamicServiciosPageContextProvider } from "~/contextproviders/DynamicServiciosPageProvider";
import ServiciosPageContainer from "~/components/ServiciosPageContainer";
import { ScreenWidthContextProvider } from "~/ScreenWidthProvider";

// create the loader to fetch data at rendering time server-side
export const loader: LoaderFunction = ({ params }) => {
  const card = cardsInfo.find((c) => c.title === String(params.cardtitle));
  if (!card) {
    throw new Response("card not found", { status: 404 });
  }
  return card;
};

// Page component, only responsible for fetching rendering time data and displaying components of the page
const DynamicServiciosPage: React.FC = () => {
  const card = useLoaderData<CardInfo>();

  return (
    <ScreenWidthContextProvider>
      <DynamicServiciosPageContextProvider card={card}>
        <ServiciosPageContainer />
      </DynamicServiciosPageContextProvider>
    </ScreenWidthContextProvider>
  );
};

export default DynamicServiciosPage;
