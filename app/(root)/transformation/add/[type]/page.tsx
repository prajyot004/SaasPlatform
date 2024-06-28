import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import TransfomationForm from "@/components/shared/TransfomationForm";
import { useAuth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
const AddTransfomationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const transfomation = transformationTypes[type];
  const {userId} = auth();
  if(!userId) redirect('/sign-in')
  const user = await getUserById(userId);
  return (
    <>
      <Header title={transfomation.title} subtitle={transfomation.subTitle} />

      <section className="mt-10">
        <TransfomationForm 
        action="Add"
        userId={user._id}
        type={transfomation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
        >
        </TransfomationForm>
      </section>
    </>
  );
};

export default AddTransfomationTypePage;
