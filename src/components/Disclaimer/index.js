import React from "react"
import PropTypes from "prop-types"
import punchPopUp from "../../images/punch-popup.png"
import "./disclaimer.css"

const Disclaimer = ({ setIsGame, isLoaded }) => {
  return (
    <div className="Disclaimer">
      <div className="container">
        <h1 className="logo-container">
          <span>PUNCH</span>
          <img src={punchPopUp} alt="MAL" className="logo" />
        </h1>
        <p>
          သည် ပျက်လုံးတစ်ခုသာဖြစ်ပြီး အလေးအနက်မမှတ်ယူသင့်ပါ။
          ဤဂိမ်းများမှဇာတ်ကောင်များ၊
          အမည်များနှင့်ဖြစ်ရပ်များအားလုံးသည်စိတ်ကူးယဉ်သက်သက်သာဖြစ်ပြီး
          မည်သည့်ပုဂ္ဂိုလ်ရေးအမြင်များကိုမှကိုယ်စားမပြုပါ။
          အကယ်၍ တစ်စုံတစ်ယောက်နှင့် တူညီခဲ့ပါက မတော်တဆတိုက်ဆိုင်မှုသာ ဖြစ်ပြီး
          ရယ်မောစရာဟာသတစ်ခုအဖြစ်သာ ရည်ရွယ်ထားကြောင်း အသိပေးအပ်ပါသည်။ ဤဂိမ်းထဲမှ
          အကြောင်းအရာများကို ကူးယူခြင်း၊ တုပခြင်း မပြုလုပ်ရပါ။
        </p>
        <button disabled={!isLoaded} onClick={() => setIsGame(true)}>
          {isLoaded ? "Continue" : "Loading..."}
        </button>
      </div>
    </div>
  )
}

Disclaimer.propTypes = {
  setIsGame: PropTypes.func.isRequired,
}

export default Disclaimer
