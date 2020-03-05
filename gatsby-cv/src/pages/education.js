import React from 'react'
import styled from 'styled-components'
import { Container} from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import Timeline from '../components/timeline'

class Education extends React.Component {
    render() {
        const title = siteConfig.siteTitle
        const { keywords } = siteConfig
        return (
            <Layout location={this.props.location}>
                <SEO
                    title={title}
                    keywords={keywords}
                />
                <Wrapper className={this.props.className} >
                    <Container className="page-content" fluid>
                        <Timeline
                            title="Education"
                            what={siteConfig.edu}
                        />

                    </Container>
                </Wrapper>
            </Layout>
        )
    }
}

export default styled(Education)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
    margin-top: 150px;
  }
`
