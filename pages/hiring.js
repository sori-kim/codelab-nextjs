import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";

export default function Hiring() {
    return (
        <div className='container'>
            <Header />
            <h1>We are hiring</h1>
        </div>
    )
}
