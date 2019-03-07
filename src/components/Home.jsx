import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import passwordimg1 from "../static/images/security.jpg";
import passwordimg2 from "../static/images/xkcd.png";
import passwordimg3 from "../static/images/lastpass.png";
import passwordimg4 from "../static/images/phishing.jpg";
import passwordimg5 from "../static/images/yahoo.png";
import passwordimg7 from "../static/images/hacker.jpg";
import PasswordChecker from "./PasswordChecker";
import Content from "./Content";
import BulletContent from "./BulletContent";

const Home = () => {
  return (
    <div className="App">
      <main>
        <Container>
          <Content
            title="Security in Technology"
            imgsrc={passwordimg1}
            source="pixabay.com/pixelcreatures"
            alttxt="Security on monitor"
          />

          <Content
            title="Security"
            content="Many people have different views on security on the internet. Whether you are involved in top secret government projects or just use Facebook, you had to create a password. In fact, most sites that people visit require an account creation. The first line of security between our personal information are passwords. Passwords are a crucial part to any account creation; however, many people take for granted the security of their password (surly no one would guess my password is “password”). This involves many cases of security breaches, where in one case Equifax (one of the largest credit agencies) had their username and password to their site be admin (Newman, 2017) and millions of accounts were compromised after. I believe that security has a very high priority in our lives on the web and as such people need to be informed on the ways passwords can be stolen, the risk involved in securing out passwords, some tips to help create unbreakable passwords, and the types of security tools available to people."
          />
          <Content
            title="Ways Passwords can be Stolen"
            imgsrc={passwordimg4}
            source="pixabay.com/Tumisu"
            alttxt="Man attempting phishing attack"
            content="There are two main ways passwords can be stolen. One way is through brute-force attacks on the passwords. Think of brute-force attacks as trying to guess their way into your account. The attackers use a device known as a “password cracker”. They start with the most commonly used password, which is “123456” (Foltýn, 2018), then they guess the next most common passwords, then dictionary words, and so on. The speed at which they guess can vary, depending on the type of computer the attacker uses. With a strong computer, the attacker can gain access to many accounts with weak passwords. One person even made a password cracker that can guess “348 billion [passwords] per second” (Szczys, 2012). This sounds scary, but keep in mind the amount of combinations possible on a keyboard. This means the weaker passwords may take months to successfully crack, even with a large number of guesses per second."
          />
          <Content content="The second way to gain access to another persons’ account is through phishing scams. Have you ever received an email asking for your personal information? In some cases, the official-looking emails say that your account was “compromised” and that you need to sign into your account to “verify your information” by clicking a link. These emails are most likely phishing scams. These types of scams make you provide your information such as your username and password that the attackers can use to gain access to your account, usually they mimic a real website’s layout and people provide their information as if they were logging into their regular page. In fact, the attacker actually recorded your personal information. Remember to never follow links through email. Always visit a site that contains your personal information by browsing it through a search engine." />
          <Content
            title="Security Risks"
            imgsrc={passwordimg5}
            source="pixabay.com/Simon"
            alttxt="Yahoo logo"
            content="One common security risk people face daily is having weak and common passwords. This is significant because weak passwords can easily be compromised. Over 83 percent of people that participated in a survey said that they used a single password for numerous websites (Zane, 2018). Using weak and repeated passwords on different websites puts you at great risks for attacks to your account. If an attacker gains access to one account, they can potentially gain access to the rest because of the common password you use across multiple sites."
          />
          <Content content="Another common risk is the security breaches happening. Some attackers are attacking the source of the accounts. Recently in 2016 Yahoo was compromised, exposing “names, email addresses, and passwords” (Larson, 2017). When security breaches like this are detected, the attacker knows the information for the person’s account. If that person uses that same email and password anywhere else on the internet, they become exposed and become a potential target. It is always important to change your passwords often, but in the case of data breaches. It is important to change your password immediately. I would recommend checking haveibeenpwned.com to see if your email has been involved in a security breach." />
          <Content
            title="Password Tips"
            imgsrc={passwordimg2}
            source="xkcd.com/936"
            alttxt="Comic explaining password tips"
            content="When making passwords, there are many recommendations people make like replacing letters with symbols, capitals, or numbers. This is a good way to increase the complexity of the password, but a complex password is not as complex as you think. Password crackers already know of common substitutions (like replacing “a” with “@” or “s” with “$”). Remembering the password also becomes a problem, when you are unsure of what was replaced. With the addition of having multiple passwords for different sites, it becomes a nightmare to remember all of the combinations. In turn you have passwords that you cannot remember that can be relatively easily cracked by computers. Instead of substituting letters with other characters, it is easier to remember a short sentence, and it is harder for password crackers to crack it. Your password should be something obscure, for example like a quote said by John Tyler (10th President of the United States). With the increase of the number of characters, your password becomes more and more secure. Of course, you should also change your passwords regularly to prevent your passwords from being compromised."
          />
          <Container>
            <Row>
              <Col>
                <PasswordChecker />
              </Col>
            </Row>
          </Container>
          <Content
            title="Other Forms of Security"
            imgsrc={passwordimg3}
            source="blog.lastpass.com"
            alttxt="LastPass Logo"
            content="There are two types of programs that would assist in advancing the protection of your accounts. One form of protection is using password management software. When using this software, you just have to enter one master password in order to access all of your stored passwords. This allows you to easily add, update, view, and delete your passwords on all websites. Some programs like LastPass also incorporate secure notes and randomly generates strong passwords for you allowing for a unique and strong password for all sites. Of course, with this convenience it makes it convinent for attackers to access all of your personal data. The same can be said when an attacker has access to your main email account. Usually any account you make on the internet requires an email. If you ever forget your password as much as I do you end up resetting the password through your email. If an attacker has access to your email, they have potential access to all of your other accounts. The benefits of using a password manager is that it is convenient, secure, easy to use, and gives you peace of mind from forgetting any passwords."
          />
          <Content content="The second program that aids in security is authentication. Authenticators are devices that add an additional step to verification. It is commonly used with an authentication app on a smart phone that produces a temporarily generated number which you use to login to your account. There are many varieties of authenticators, but they all have the same core functionality, that you provide your password as well as validate the entry with a code on a device. If you have an authenticator set up on your account an attacker needs both your password and your physical authentication device, making this combination very secure. When logging into my Microsoft Outlook account I have the option of logging in through my mobile device, without a password, so even on its own the authenticator is a very good security tool to use." />
          <Content content="When you combine both the use of a password manager that generates strong passwords and an authentication device, you are left with a very strong and secure combination. Just make sure not to lose the authentication device." />
          <Content
            title="Security Considerations"
            imgsrc={passwordimg7}
            source="pixabay.com/typographyimages"
            alttxt="Lock with code in the background"
            content="There are many problems in our lives that occur on a daily basis. Most of these problems are reactive, we only fix them once something goes wrong. With the issue of security, when an attacker acquires your personal information, it is often too late. Your personal information can be taken and you could be left with a big problem of recovering your information. It is always better to prevent than to fix. Remember that to never use the same password on more than one site, that a good password does not always have to be hard to remember, it could be a phrase or a quote, and with the right tools such as a password manager and an authenticator you can be sure that your account is protected and your information is secured."
          />
          <BulletContent
            title="References"
            content={[
              "Foltýn, T. (2018, December 17). The Most Popular Passwords of 2018 revealed: Are Yours on the List? 	Retrieved from https://www.welivesecurity.com/ 2018/12/17/most-popular-passwords-2018-revealed/",
              "Larson, S. (2017, October 4). Every single Yahoo account was hacked-3 billion in all. Retrieved from https://money.cnn.com/ 2017/10/03/technology/business/yahoo-breach-3-billion-accounts/index.html",
              "Newman, L. (2017, Sept 14). Equifax Officially has no Excuse. Retrieved from https://www.wired.com/story/equifax-breach-no-excuse/",
              "Szczys, M. (2012, December 6). 25 Gpus Brute Force 348 Billion Hashes per Second to Crack Your Passwords. Retrieved from https://hackaday.com/2012/12/06/25-gpus-brute-force-348-billion-hashes-per-second-to-crack-your-passwords/",
              "Zane (2018, July 13). Password Security Report: 83% of Users Surveyed Use the Same Password for Multiple Sites. Retrieved from https://www.cyclonis.com/report-83-percent-users-surveyed-use-same-password-multiple-sites/"
            ]}
          />
        </Container>
      </main>
    </div>
  );
};

export default Home;
