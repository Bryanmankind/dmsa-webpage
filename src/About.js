import React from 'react';
import lead_pic from "./image/lead_pic.jpg";

export function About() {
    return (
        <div className="about">
            <div className="row">
                <div className="about-col-1">
                    <img src={lead_pic} alt="Lead Pastor"/>
                    <p>Lead Pastor</p>
                    <h2>Pastor Segun Makinde</h2>
                </div>
                <div className="about-col-2">
                    <p>
                        Divine Mercy Seat Assembly is a church that believes in Jesus Christ's teachings and wants to share them with everyone. Led by Pastor Segun Makinde, we focus on bringing hope and healing to people's lives through the power of prayer, worship, and God's word.

                        Our goal is to show people the love of Jesus and help them find peace and joy in their lives. We see our church as a place where everyone can feel like they belong—a home away from home. Whether you're looking for guidance, friendship, or a sense of purpose, you're always welcome to join us on our journey of faith.
                        
                        We believe that by following Jesus, we can make a positive difference in the world and bring light into the lives of those around us. So come and be a part of our community as we learn, grow, and spread God's love together.
                    </p>
                </div>
            </div>
        </div>
    );
}
