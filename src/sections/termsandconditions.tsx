

const content=[
{
    title:'1. Acceptance of Terms',
    description:'By accessing and using the TechNex Cloud Networks website (technexcloudnetworks.in) and its services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.'
},
{
    title:'2. Services Offered',
    description:'TechNex Cloud Networks provides online courses, training programs, internship opportunities, and placement guidance in various technology domains. While we strive for accuracy, we do not guarantee the completeness or suitability of the information and materials found on this website for any particular purpose.'
},
{
  title:'3. User Accounts',
  description:'To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.'
},
{
  title:'4. Payments and Refunds',
  description:'All fees for courses and services are clearly stated on our website. Payments are processed securely through third-party payment gateways. Our refund policy is outlined separately on our website.'
},
{
  title:'5. Intellectual Property',
  description:'All content on this website, including text, graphics, logos, images, and course materials, is the property of TechNex Cloud Networks or its content suppliers and is protected by intellectual property laws.'
},
{
  title:'7. Governing Law',
  description:'These Terms and Conditions shall be governed by and construed in accordance with the laws of Hyderabad, Telangana, India.'
},
{
  title:'8. Changes to Terms',
  description:'We reserve the right to modify these Terms and Conditions at any time. Significant changes will be posted on our website.'
},
{
  title:'9. Contact Information',
  description:'If you have any questions about these Terms and Conditions, please contact us via email or our website.'
}

]
export function Terms(){
    return(
        <>
        <div>
            <h1 className="text-center text-4xl font-bold py-8">Terms & Conditions</h1>
            <div className=" flex justify-center  md:py-5">
               <div className="w-[70%]">
                    {
                  content.map(item=>
                    <>
                    <div id={item.title} className="text-2xl font-bold pt-3 pb-1">
                      {item.title}
                    </div>
                    <div id={item.title} className="md:text-[18px] text-[13px] " style={{lineHeight:'30px'}}>
                      {item.description}
                    </div>
                    </>
                  )
                }
                <ul className="md:text-[18px] text-[13px] font-bold py-3"  >
                 <li>Email: <a href="" className="text-blue-500" style={{textDecoration:'underline'}}> technexcloudnetworks@gmail.com</a></li>
                 <li>Website:<a href="" className="text-blue-500" style={{textDecoration:'underline'}}> technexcloudnetworks.in</a></li>
               </ul>
               </div>
            </div>
            
        </div>

        </>
    )
}