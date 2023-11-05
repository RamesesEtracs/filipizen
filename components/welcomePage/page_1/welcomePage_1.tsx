import React from 'react'

import { SafeAreaView, View, Image, Text, StatusBar } from 'react-native'
import Svg, { Rect, Path } from 'react-native-svg'

//styling
import styles from './welcomePage_1.style'
import buttonStyles from '../../button/button.style'

//components
import { color, textColor } from '../../../constants'
import { images } from '../../../constants'
import Button from '../../button/button'



const textContent: textProps = {
  header: 'All in One App',
  body: 'Experience ease of doing business with the government.',
}

const WelcomePage_1: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.upperPageContainer}>
          {/* Upper Portion of the Page Contains the Photo */}
          <View style={styles.bigCircleSVGContainer}>
            <Svg
              width="204"
              height="204"
              fill="none"
            >
              <Rect
                width="204"
                height="204"
                fill={color.fadedWhite}
                rx="102"
              />
            </Svg>
          </View>

          {/* Photo Container and SVG */}
          <View style={styles.imageParentContainer}>
            <View style={styles.svgContainer}>
              <Svg width="112" height="110" fill="none">
                <Rect
                  width="108"
                  height="106"
                  x="5"
                  y="4"
                  fill={color.tertiary}
                  stroke="#fff"
                  stroke-width="4"
                  rx="53"
                />
              </Svg>
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={images.guyHoldingAphone}
                style={styles.imageLayout}
              />
            </View>
          </View>
        </View>

        {/* Center Portion of the Page Contains the Main Content */}
        <View style={styles.lowerPageContainer}>
          {/* Container for SVG */}
          <View>
            <Svg
              width="500"
              height="500"
              fill="none"
              viewBox="5 1 360 360"
            >
              <Path
                fill={color.fadedWhite}
                d="M236.725 58.8247C245.906 33.8688 249.662 4.9021 306 0v455H4.28V170.681c-23.3698-50.358 52.9992-137.7035 131.037-81.1071 62.431 45.2771 93.619-1.634 101.408-30.7492Z"
              />
            </Svg>
          </View>

          {/*  Content Container */}
          <View style={styles.contentContainer}>
            {/* Container for Text */}
            <View style={styles.mainTextContainer}>
              <Text style={styles.textHeader}>{textContent.header}</Text>
              <View style={styles.bodyTextContainer}>
                <Text style={styles.bodyTextLayout}>{textContent.body}</Text>
              </View>
            </View>

            {/* Container for Icon */}
            <View style={styles.iconContainer}>
              <Svg
                width="59"
                height="9"
                fill="none"
              >
                <Rect
                  width="40.5"
                  height="9"
                  fill={color.secondary}
                  rx="4.5"
                />
                <Rect
                  width="9"
                  height="9"
                  x="49.5"
                  fill={color.grey}
                  rx="4.5"
                />
              </Svg>
            </View>

            {/* Container for Button */}
            <View style={buttonStyles.customButtonContainer}>
              <View style={{ flex: 2 }}>
                <Button
                  buttonLayout={{
                    width: 185,
                    height: 40,
                    borderRadius: 25,
                  }}
                  buttonName="Skip" 
                  buttonColor={color.white}
                  buttonNameColor={textColor.black}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Button
                  buttonLayout={{
                    width: 190,
                    height: 40,
                    borderRadius: 25,
                  }}
                  buttonName="Next"
                  buttonColor={color.primary}
                  buttonNameColor={textColor.white}
                />
              </View>
            </View>
          </View>
        </View>
        <StatusBar barStyle="default" />
      </View>
    </SafeAreaView>
  )
}

export default WelcomePage_1
