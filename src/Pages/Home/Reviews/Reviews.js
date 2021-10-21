import React from 'react';

const Reviews = () => {
    return (
        <div className="container border border-primary mb-3">
            <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
            <p className="text-center mb-5">
                Find the answers for the most frequently asked questions below
            </p>

            <div className="row g-4">
                <div className="col-md-6 col-lg-4 mb-4 bg-light">
                    <h6 className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i>I am looking for membership prices. How much does it cost to join?</h6>
                    <p>
                        <strong><u>Pricing</u></strong> will vary depending on your programs, but the average cost of monthly membership is $36.50 in the United States and $49 in Canada. Club dues, monthly fees and any additional charges are specific to each independently owned gym.
                    </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4 bg-light">
                    <h6 className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2"></i> What is your cancellation policy? Is there a fee for breaking my contract?</h6>
                    <p>
                        <strong><u>All cancellation policies</u></strong>  are outlined in the membership agreement for each location. The agreement covers the cost to cancel, how to cancel and more information on any additional termination fees you may incur.
                    </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4 bg-light">
                    <h6 className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2"></i> Can I speak to you by phone or video chat to get more information before I join?
                    </h6>
                    <p>
                        Absolutely! Simply book a “FREE Program Inquiry” to speak to me directly about our services via Zoom video chat and discuss your needs and program details.
                    </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4 bg-light">
                    <h6 className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2"></i> What can I expect in each coaching session?
                    </h6>
                    <p>
                        Your professional fitness and nutrition coach will determine the general course of coaching calls based on their observations, your conversations, and any other data they collect relevant to you.
                    </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4 bg-light">
                    <h6 className="mb-3 text-primary"><i className="fas fa-home text-primary pe-2"></i> Will my program include nutrition counseling or a meal plan?
                    </h6>
                    <p><strong><u>Yes! </u>.</strong> One thing that separates Forge from other online training options is we have a fully licensed and Registered Dietitian in-house.

                        Your coach will provide nutritional education no matter your program type but the Complete and Premium programs include a personalized meal plan based on your food preferences and dietary needs.</p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4 bg-light">
                    <h6 className="mb-3 text-primary"><i className="fas fa-book-open text-primary pe-2"></i> What certifications and experience do you have?</h6>
                    <p>
                        Personally, I have nearly 20 years of experience in the fitness industry and am a former college instructor of Advanced Fitness and Nutrition Sciences at Bryan University. Collectively, we bring 60 years of combined experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;