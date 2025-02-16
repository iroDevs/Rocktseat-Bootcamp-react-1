import style from './Banner.module.css';
import logo from '../../assets/Logo.svg'
export default function Banner() {
    return (
        <div className={style.banner}>
            <img
              alt="logo-da-empresa"
              src={logo}
            />
        </div>
    )
}