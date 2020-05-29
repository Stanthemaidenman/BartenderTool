import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class SitePicker extends Component {

    constructor() {
        super();
        this.state = {
            sites: []
        }
    }

    componentDidMount() {
        const url = 'https://localhost:5000/sites/all/666';

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                sites: data
            }))
    }


    render() {
        return (
            <div className="outer-div">
                <h2>Select Site</h2>
                <h4>Account: 123456</h4>

                <table>
                    <thead>
                        <tr>
                            <td>Type</td>
                            <td>Site ID</td>
                            <td>Site Name</td>
                            <td>Index URL</td>
                            <td>Pages</td>
                            <td>Links</td>
                            <td>Max Pages</td>
                            <td>Max Links</td>
                            <td>Max Level</td>
                            <td>Crawler</td>
                            <td>Crawl Allowed</td>
                            <td>Respect robots.txt</td>
                            <td>Latest Crawl</td>
                            <td>Status</td>
                            <td>Crawling</td>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(this.state.sites)}
                        {this.state.sites.map(site => (
                            <Fragment key={site.siteId}>
                                <tr>
                                    <td>{ site.agreementType }</td>
                                    <td>{ site.siteId }</td>
                                    <td>
                                        <Link to='/QA-pagepicker'>{ site.siteName }</Link>
                                    </td>
                                    <td>{ site.indexUrl }</td>
                                    <td>{ site.pages }</td>
                                    <td>{ site.links }</td>
                                    <td>{ site.maxPages }</td>
                                    <td>{ site.maxLinks }</td>
                                    <td>{ site.maxLevel }</td>
                                    <td>{ site.crawler }</td>
                                    <td>{ String(site.crawlAllowed) }</td>
                                    <td>{ String(site.respectTobotsTxt) }</td>
                                    <td>{ String(site.latestCrawlStatus) }</td>
                                    <td>{ String(site.crawlingColumn) }</td>
                                </tr>
                            </Fragment>
                        ))}
                    </tbody>
                </table>


            </div>
        );
    }
}
