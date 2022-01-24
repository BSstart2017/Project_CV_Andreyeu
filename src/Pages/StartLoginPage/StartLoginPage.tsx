import {Layout} from "antd";
import React, {FC, useState} from "react";
import StartLoginHeader from "../../components/StartLoginHeader/StartLoginHeader";
import CustomerCarousel from "../../components/CustomerCarousel/CustomerCarousel";
import CustomerContent from "../../components/CustomerContent/CustomerContent";
import Welcome from "../../components/Welcome/Welcome";
import CustomerTextContent from "../../components/CustomerTextContent/CustomerTextContent";
import FooterMy from "../../components/FooterMy/FooterMy";
import CustomerCards from "../../components/CustomerCards/CustomerCards";
import {Route} from "react-router-dom";
import {AuthPage} from "./AuthPage";
import {useSelector} from "react-redux";
import {getCardsInfo, getCarouselItems, getContentImgItems} from "../../redux/Selectors/startLoginPageSelectors";
import SocialLink from "../../components/SocialLink/SocialLink";
import {getIsLoginSelector} from "../../redux/Selectors/authSelector";

const  Content = Layout.Content
export const StartLoginPage: FC = () => {

  let [onLogin, setOnLogin] = useState<boolean>(false)
  const isLogin = useSelector(getIsLoginSelector)
  const contentImgItems = useSelector(getContentImgItems)
  const carouselItems = useSelector(getCarouselItems)
  const cards = useSelector(getCardsInfo)

  return (
    <Layout>
      {!onLogin && !isLogin
        ? <><StartLoginHeader setOnLogin={setOnLogin}/>
          <Content>
            <Welcome/>
            <CustomerTextContent/>
            <div style={{paddingTop:100, textAlign: 'center'}}>
                <CustomerCards spanNumber={6} textColorCard={'black'} cards={cards}/>
            </div>
            <div style={{paddingTop: 100}}>
              <CustomerCarousel carouselItems={carouselItems}/>
            </div>
            <div style={{paddingTop: 100}}>
            <CustomerContent contentImgItems={contentImgItems}/>
            </div>
            <CustomerTextContent/>
            <SocialLink/>
          </Content>
          <FooterMy/>
        </>
        : <Route path="/" render={() => <AuthPage onLogin={onLogin} setOnLogin={setOnLogin}/>}/>
      }
    </Layout>
  )
}

