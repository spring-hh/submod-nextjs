// eslint-disable-next-line import/no-unresolved
import CognitoProvider from 'next-auth/providers/cognito';
import Head from 'next/head';
import Image from 'next/image';

providers: [
  CognitoProvider({
    clientId: process.env.COGNITO_CLIENT_ID ? process.env.COGNITO_CLIENT_ID : '',
    clientSecret: process.env.COGNITO_CLIENT_SECRET ? process.env.COGNITO_CLIENT_SECRET : '',
    issuer: process.env.COGNITO_ISSUER
  })
];

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
