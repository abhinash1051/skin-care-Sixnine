import React from 'react'

const para = () => {
    return (
        <div>
            {/* Paragraph */}
            <div
                className=" mx-auto mt-10 text-center text-base text-gray-700"
                style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '30px',
                    backgroundColor: '#FEFFF4',
                    marginLeft: '20px',
                    marginRight: '20px',
                    padding: '20px',
                    textAlign: 'justify',


                    lineHeight: '1.5',

                    // Note: leading-trim isn't supported in all browsers; it's ignored here
                }}
            >
                <p>
                    <strong className="text-gray-900">
                        Experience the ultimate in skincare
                    </strong>{" "}
                    with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest{" "}
                    natural ingredients with
                    <span className="text-gray-400">advanced science ur collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day.
                        Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
                    </span>
                </p>

            </div>
        </div>
    )
}

export default para
