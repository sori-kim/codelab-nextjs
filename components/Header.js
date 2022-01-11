import Link from "next/link";

export default function Header () {
    return (
        <header className=" flex flex-row p-2 justify-between">
            <div>
                <Link href='/'>
                    <a  type="button" className="btn btn-link">Caffe</a>
                </Link>

            </div>
            <div>
                <Link href="/intro">
                    <a type="button" className="btn btn-link">Introduce</a>
                </Link>
                <Link href="/order">
                    <a type="button" className="btn btn-link">Order</a>
                </Link>
                <Link href="/hiring">
                    <a type="button" className="btn btn-link">Hiring</a>
                </Link>
                <Link href="/contact">
                    <a type="button" className="btn btn-link">Contact Us</a>
                </Link>
            </div>
        </header>
    )
}