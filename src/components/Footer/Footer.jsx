import amazonPayLogo from "../../assets/imgs/amazon-pay.png"
import americanExpressLogo from "../../assets/imgs/American-Express-Color.png"
import masterCardLogo from "../../assets/imgs/mastercard.webp"
import payPalLogo from "../../assets/imgs/paypal.png"

import appStoreLogo from "../../assets/imgs/get-apple-store.png"
import playStoreLogo from "../../assets/imgs/get-google-play.png"
export default function Footer() {
  return <>
    <footer className="bg-slate-100 py-8">
      <div className="container space-y-4">
        <div className="header">
          <h2 className="font-semibold text-lg text-slate-800">Get the FreshCart app</h2>
          <p className="text-sm text-gray-500">We will send you a link, open it on your phone to download the app.</p>
        </div>

        <div className="flex gap-2  items-center">
          <input type="email" placeholder="Email Address" className="form-control grow"></input>
          <button className="btn uppercase bg-primary-800 hover:bg-primary-900 font-semibold text-white text-sm">Share App Link</button>
        </div>

        <div className="flex justify-between items-center py-2 border-slate-300 border-y-2 border-opacity-50 ">
          <div className="paymentPartners flex items-center gap-3">
            <h3>Payment Partners</h3>
            <img src={amazonPayLogo} className="w-24"></img>
            <img src={americanExpressLogo} className="w-24"></img>
            <img src={masterCardLogo} className="w-20"></img>
            <img src={payPalLogo} className="w-24"></img>
          </div>
          <div className="download flex gap-3 items-center">
            <h3>Get deliveries with FreshCart</h3>
            <img src={appStoreLogo} className="w-24"></img>
            <img src={playStoreLogo} className="w-[110px]"></img>
          </div>
        </div>
      </div>
    </footer>
  </>
}

