import { Button } from "@/components/ui/button";
import { privatePolicy } from "@/data.json";
import { handleSeparateWord } from "@/helper";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
const PrivateSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "PrivatePolicy",
  });

  return (
    <>
      <div className="main-container pt-6 text-four">
        <h1 className="text-size-4xl text-secondary">Privacy Policy</h1>
        <div className="mt-6">Last Updated: Feb 03, 2020</div>
        <Button
          variant={"primary"}
          size={"third"}
          className="w-[260px] flex justify-center items-center gap-2 text-third mt-4"
          onClick={() => reactToPrintFn()}
        >
          <FaDownload />
          Download
        </Button>
      </div>
      <section ref={contentRef} className="main-container">
        <section className=" max-w-[880px] w-full">
          <div className="italic mt-4">
            <p>
              Ojimah.com (hereinafter, “United GB Sarl” or “We”) values its
              users and it is committed to protect your privacy. In order to
              fulfill this commitment, Ojimah has developed this privacy policy
              (hereinafter, the “Privacy Policy” or “Policy”) outlining Ojimah’s
              practices regarding the collection, use, preservation and
              disclosure of personal information collected in accordance with
              applicable laws.
            </p>
            <br />
            <p>
              When You use Ojimah’s services, whether to make searches, sign in
              to receive offers and news, or purchase any service through any
              other of its sale channels, call center, website (hereinafter, the
              “Website”) or application for mobiles and tablets (hereinafter,
              the “Application”) you trust information to us. This Privacy
              Policy seeks to help you understand which data we collect, why we
              do it, and what we do with such data. You, as a user, accept the
              practices detailed below, so we recommend you to carefully read
              the information offered to you.
            </p>
            <br />
            <p>
              The person in charge of the data base/file is Ojimah.com, Inc.,
              domiciled at Rua n4, Porta 3, 401 Bissau Velho, Bissau,
              Guinea-Bissau.
            </p>
            <ul className="list-decimal not-italic ml-4 mt-6 flex flex-col gap-2">
              <li className="pl-4">1. What information do we collect?</li>
              <li className="pl-4">
                2. What do we use the information collected for?
              </li>
              <li className="pl-4">
                3. Who we share the information collected with?
              </li>
              <li className="pl-4">
                4. Where do we store and how we protect the information
                collected?
              </li>
              <li className="pl-4">
                5. How can the information collected be accessed, deleted and/or
                updated?
              </li>
              <li className="pl-4">
                6. How does Despegar interact with your social networks?
              </li>
            </ul>
          </div>
          <div>
            {privatePolicy.map((value, index) => (
              <div key={index} className="md:mt-8 mt-6 text-four">
                <h2 className="text-secondary text-size-3xl">{value.title}</h2>
                {value.quickDes ? (
                  <div className="my-4">{value.quickDes}</div>
                ) : null}
                {value.contents ? (
                  <div>
                    {value.contents.map((content, index) => (
                      <div className="md:mb-10 mb-8" key={index}>
                        <h3 className="text-size-xl text-secondary mt-8">
                          {content.title}
                        </h3>
                        <div>
                          {handleSeparateWord(content.description).map(
                            (cont, index) => (
                              <div key={index} className="mt-4">
                                {cont}
                              </div>
                            )
                          )}
                        </div>
                        {/* {content?.list ? (
                      <ul>
                        {content?.list.map((cont, index) => (
                          <li key={index}>{content}</li>
                        ))}
                      </ul>
                    ) : null} */}
                      </div>
                    ))}
                  </div>
                ) : null}
                {value.list ? (
                  <ul className="flex flex-col gap-2 list-disc ml-4">
                    {value.list.map((cont, index) => (
                      <li key={index}>{cont}</li>
                    ))}
                  </ul>
                ) : null}
                {value.description ? (
                  <div>
                    {handleSeparateWord(value.description).map((des, index) => (
                      <div key={index} className="mt-4">
                        {des}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-4">
            If you have questions about this Privacy Policy, Ojimah’s practices
            or your transactions at Ojimah’s page{" "}
            <Link to="#!" className="text-six">
              www.Ojimah.com/aboutus{" "}
            </Link>
            please contact us in “My Account” or “My Booking”.
          </div>
        </section>
      </section>
    </>
  );
};

export default PrivateSection;
