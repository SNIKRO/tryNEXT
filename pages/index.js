import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

export default function Index() {
  return (
  <MainLayout title = {'HOME PAGE'}>
    <h1>Hello its main page</h1>
  </MainLayout>
  )
}