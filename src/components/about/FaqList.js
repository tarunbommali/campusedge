import React from 'react'

const FaqList = ({ABOUT_FAQ_LIST}) =>  (
  <div>
    {ABOUT_FAQ_LIST.map((faq) => (
      <div key={faq.faqId} className="collapse collapse-arrow bg-white my-2">
        <input
          type="checkbox"
          id={faq.faqId}
          className="peer"
        />
        <div className="collapse-title text-xl text-[#4a4a67] font-medium">
          {faq.question}
        </div>
        <div className="collapse-content">
          <p>{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>
);

export default FaqList