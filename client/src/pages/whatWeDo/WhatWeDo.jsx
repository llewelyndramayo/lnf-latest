import * as React from "react";
import { Typography, Collapse } from "antd";

import aboutImage from "@/assets/images/about.svg";

const { Title, Text } = Typography;
const { Panel } = Collapse;

function Faqs() {
  return (
    <div className="lnf-what-we-do">
      <div className="lnf-what-we-do-header">
        <Title level={1}>Frequently Asked Questions</Title>
      </div>

      <div className="lnf-what-we-do-content">
        <Collapse accordion>
          <Panel header="How to Claim an item in the system?" key="1">
            <p>
              To claim an item in the Lost and Found Management System, follow
              these steps:
              <ol>
                <li>Login to your account.</li>
                <li>Navigate to the 'Search' section.</li>
                <li>Select the item you wish to claim from the list.</li>
                <li>Provide necessary identification or proof of ownership.</li>
                <li>
                  Once verified, follow the on-screen instructions to complete
                  the claim process.
                </li>
              </ol>
            </p>
          </Panel>

          <Panel
            header="Does a student need an account to claim an item in the system?"
            key="2"
          >
            <p>
              Yes, students (or any user) need to have a registered account to
              claim an item in the system. Having an account ensures that only
              authorized individuals can claim items and helps maintain the
              security and integrity of the system.
            </p>
          </Panel>

          <Panel header="Claiming an item choices" key="3">
            <p>
              When claiming an item, users typically have the following choices:
              <ul>
                <li>Retrieve the item from a designated location on campus.</li>
                <li>
                  Request the item to be delivered to a specific location (if
                  available).
                </li>
              </ul>
            </p>
          </Panel>

          <Panel header="Posting an item in the system" key="4">
            <p>
              To post an item in the Lost and Found Management System:
              <ol>
                <li>Login to your account.</li>
                <li>
                  Navigate to the 'Report an Item' section.
                </li>
                <li>
                  Provide detailed information about the item, including its
                  description, location where it was found, and any other
                  relevant details.
                </li>
                <li>Upload clear images of the item (if possible).</li>
                <li>
                  Submit the information, and the item will be listed in the
                  system for others to claim.
                </li>
              </ol>
            </p>
          </Panel>
        </Collapse>
        <div className="lnf-what-we-do-content-image">
          <img src={aboutImage} alt="About" />
        </div>
      </div>
    </div>
  );
}

export { Faqs as default };
