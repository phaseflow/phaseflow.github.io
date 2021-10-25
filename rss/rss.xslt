<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="1.0">
  <xsl:output method="html" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN"/>
  <xsl:variable name="title" select="/rss/channel/title"/>
  <xsl:variable name="feedDesc" select="/rss/channel/description"/>
  <xsl:variable name="copyright" select="/rss/channel/copyright"/>
  <xsl:variable name="feedUrl" select="/rss/channel/atom:link[@rel='self']/@href" xmlns:atom="http://www.w3.org/2005/Atom"/>
  <!-- <xsl:variable name="baseURL" select="''" xmlns:atom="http://www.w3.org/2005/Atom"/> -->
  <xsl:variable name="rssPath" select="'rss'" xmlns:atom="http://www.w3.org/2005/Atom"/>

  <xsl:template match="/">
    <xsl:element name="html">
      <head>
        <title><xsl:value-of select="$title"/></title>
        <!-- <link href="{$baseURL}/styles.css" rel="stylesheet" type="text/css" media="all"/> -->
        <link href="{$rssPath}/rss.css" rel="stylesheet" type="text/css" media="all"/>
        <link rel="shortcut icon" href="https://phaseflow.github.io/images/favicon.png" type="image/png"/>
        <!-- <xsl:element name="script">
          <xsl:attribute name="type">text/javascript</xsl:attribute>
          <xsl:attribute name="src"><xsl:copy-of select="$baseURL"/>/jquery.min.js</xsl:attribute>
        </xsl:element>
        <xsl:element name="script">
          <xsl:attribute name="type">text/javascript</xsl:attribute>
          <xsl:attribute name="src"><xsl:copy-of select="$baseURL"/>/rss.js</xsl:attribute>
        </xsl:element> -->
      </head>
      <xsl:apply-templates select="rss/channel"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="channel">
    <body>
      <header>      
        <div id="headerContainer">
          <a id="logoContainer" href="/">
            <img id="logoImage"
              src="https://phaseflow.github.io/images/logo16T150.png"/>
            <span id="logoTitle">Phase Flow</span>
          </a>
          <div id="navigationContainer">
            <!-- <div><a href="https://geo.itunes.apple.com/podcast/phase-flow/id1071923917">Apple Podcasts</a></div>
            <div><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9waGFzZWZsb3cuZ2l0aHViLmlvL3BvZGNhc3QueG1s">Google Podcasts</a></div>
            <div><a href="https://pca.st/wpos">Pocket Casts</a></div> -->
            <div><a href="https://geo.itunes.apple.com/podcast/id1071923917"><img src="/images/apple_podcasts.svg" height="35" alt="Слушать в Apple Подкастах" /></a></div>
            <div><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9waGFzZWZsb3cuZ2l0aHViLmlvL3BvZGNhc3QueG1s"><img src="/images/google_podcasts.svg" height="35" alt="Слушать в Google Подкастах" /></a></div>
            <div><a href="https://pca.st/wpos"><img src="/images/pocket_casts.svg" height="35" alt="Слушать в Pocket Casts" /></a></div>
          </div>
        </div>        
      </header>
      <main>
        <div id="left"><!-- hides 'Go up' button on the first 150% of screen height --></div>
        <div class="container">
          <div class="row header">
            <div class="col-sm-4">
              <div class="artwork pull-left" style="margin-right: 16px; height: 100%; position: relative;">
                <xsl:apply-templates select="image"/>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="titleblock">
                <h1>
                  <xsl:element name="a">
                    <xsl:attribute name="href">
                      <xsl:value-of select="/rss/channel/link[1]" xmlns:atom="http://www.w3.org/2005/Atom"/>
                    </xsl:attribute>
                    <xsl:attribute name="title">Link to original website</xsl:attribute>
                    <xsl:value-of select="$title"/>
                  </xsl:element>
                </h1>
                <p id="desctext"><xsl:value-of select="$feedDesc"/></p>
                <p class="copyright">
                  <xsl:value-of select="$copyright"/>
                </p>
              </div>
            </div>
          </div>
          <div id="bodyblock">
            <xsl:apply-templates select="item"/>
          </div>
          <div id="footer">
            <div>
              Powered by <a target="_blank" href="https://phaseflow.github.io">phaseflow.github.io</a>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <a href="#">
            <svg fill="#009688" height="18" viewBox="0 0 20 20" width="18" xmlns="http://www.w3.org/2000/svg">
			  <path d="M0 0h24v24H0V0z" fill="none"></path>
			  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
			</svg>
            Go up
          </a>
        </div>
      </footer>    
    </body>
  </xsl:template>

  <xsl:template match="item" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">

    <xsl:variable name="artwork" select="itunes:image/@href"/>
    <!-- <xsl:variable name="thumbnail" select="concat(substring($artwork, 1, string-length($artwork)-4),'_thumb.jpg')" /> -->

    <ul xmlns="http://www.w3.org/1999/xhtml" >
      <!-- style="background: url({$thumbnail}) no-repeat center; background-size: cover;"> -->
      <!-- <img src="{$thumbnail}" style="width:100%; object-fit: cover;
      position: absolute;left:0; right:0;z-index: 0; filter:blur(8px)"/> -->
      <li class="regularitem" style="z-index: 2; position: relative;">

        <ul class="itemtitle" style="background: transparent;">
          <li style="display: inline-block;">
            <h4>
              <a href="{link}" id="{itunes:subtitle}">
                <xsl:value-of select="title"/>
              </a>
            </h4>
          </li>
          <li style="display: inline-block; float: right; margin-top: 10px">
            <a target="_blank" href="{enclosure/@url}">
              Download
            </a>
          </li>
        </ul>

        <div class="pictureenclosure">
          <a href="{link}">
            <xsl:if test="contains($artwork, 'archive.org')">
              <xsl:variable name="thumbnail" select="concat(substring($artwork, 1, string-length($artwork)-4),'_thumb.jpg')" />
              <img src="{$thumbnail}" alt="Link to {title}" class="img-responsive" loading="lazy" style="width:100%; max-width:192px; margin-left: 5px;" />
            </xsl:if>
            <xsl:if test="not(contains($artwork, 'archive.org'))">
              <img src="{$artwork}" alt="Link to {title}" class="img-responsive" loading="lazy" style="width:100%; max-width:192px; margin-left: 5px;" />
            </xsl:if>
          </a>          
        </div>
        
        <div class="itemcontent" name="decodeable">
          <h5 class="itemposttime">
            <xsl:if test="count(child::pubDate)=1"><xsl:value-of select="substring(pubDate, 0, 17)"/></xsl:if>
            <xsl:if test="count(child::dc:date)=1"><xsl:value-of select="dc:date"/></xsl:if>
          </h5>
          <xsl:call-template name="outputContent"/>
        </div>

        <div class="mediaenclosure">
          <xsl:if test="count(child::enclosure)&gt;0">
            <xsl:if test="contains(enclosure/@type, 'video')">
              <xsl:element name="video" namespace="http://www.w3.org/1999/xhtml">
                <xsl:attribute name="width">320</xsl:attribute>
                <xsl:attribute name="height">180</xsl:attribute>
                <xsl:attribute name="controls" />
                <xsl:attribute name="class">vplayer</xsl:attribute>
                <xsl:if test="position() = 1">
                  <xsl:attribute name="autobuffer" />
                </xsl:if>
                <xsl:element name="source" namespace="http://www.w3.org/1999/xhtml">
                  <xsl:attribute name="src">
                    <xsl:value-of select="enclosure/@url"/>
                  </xsl:attribute>
                  <xsl:attribute name="type">
                    <xsl:value-of select="enclosure/@type"/>
                  </xsl:attribute>
                </xsl:element>
              </xsl:element>
            </xsl:if>
            <xsl:if test="contains(enclosure/@type, 'audio')">
              <xsl:variable name="encURL" select="enclosure/@url" xmlns:atom="http://www.w3.org/2005/Atom"/>
              <xsl:element name="audio" namespace="http://www.w3.org/1999/xhtml">
                <xsl:attribute name="controls" />
                <xsl:attribute name="preload">none</xsl:attribute>
                <xsl:element name="source" namespace="http://www.w3.org/1999/xhtml">
                  <xsl:attribute name="src">
                    <xsl:value-of select="enclosure/@url"/>
                  </xsl:attribute>
                  <xsl:attribute name="type">
                    <xsl:value-of select="enclosure/@type"/>
                  </xsl:attribute>
                </xsl:element>
              </xsl:element>
            </xsl:if>
          </xsl:if>
        </div>
      </li>
    </ul>

  </xsl:template>
  <xsl:template match="image">
    <a href="{link}" title="Link to original website">
      <xsl:element name="img" namespace="http://www.w3.org/1999/xhtml">
        <xsl:attribute name="src">
          <xsl:value-of select="url"/>
        </xsl:attribute>
        <xsl:attribute name="alt">Link to <xsl:value-of select="title"/></xsl:attribute>
        <xsl:attribute name="class">img-responsive</xsl:attribute>
      </xsl:element>
    </a>
    <xsl:text/>
  </xsl:template>
  <xsl:template name="outputContent">
    <xsl:choose>
      <xsl:when xmlns:xhtml="http://www.w3.org/1999/xhtml" test="xhtml:body">
        <xsl:copy-of select="xhtml:body/*"/>

      </xsl:when>
      <xsl:when xmlns:xhtml="http://www.w3.org/1999/xhtml" test="xhtml:div">
        <xsl:copy-of select="xhtml:div"/>
      </xsl:when>
      <xsl:when xmlns:content="http://purl.org/rss/1.0/modules/content/" test="content:encoded">
        <xsl:value-of select="content:encoded" disable-output-escaping="yes"/>
      </xsl:when>
      <xsl:when test="description">
        <xsl:value-of select="description" disable-output-escaping="yes"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
