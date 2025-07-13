export default function Component() {
  return (
    <>
      <header
        className="header header--sm"
        style={{
          boxSizing: 'border-box',
          inset: '0% 0% auto',
          zIndex: 999,
          cssFloat: 'none',
          clear: 'none',
          backgroundColor: 'white',
          objectFit: 'fill',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '0px',
          paddingBottom: '0px',
          display: 'block',
          overflow: 'visible',
          maxWidth: '100vw',
          height: '4rem',
          position: 'sticky',
          top: '0%',
          transform:
            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="uui-navbar03_component w-nav"
          role="banner"
          style={{
            boxSizing: 'border-box',
            background: 'rgb(221, 221, 221)',
            zIndex: 1000,
            position: 'relative',
            borderBottom: '1px solid #f2f4f7',
            backgroundColor: 'rgb(255, 255, 255)',
            alignItems: 'center',
            height: '4rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            display: 'flex',
          }}
        >
          <div
            className="uui-navbar03_container"
            style={{
              boxSizing: 'border-box',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              maxWidth: '80rem',
              height: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
            }}
          >
            <a
              className="uui-navbar03_logo-link w-nav-brand w--current"
              aria-current="page"
              aria-label="home"
              href="https://www.nequi.com.co/"
              style={{
                boxSizing: 'border-box',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                textDecoration: 'none',
                cssFloat: 'left',
                color: 'rgb(51, 51, 51)',
                position: 'relative',
                paddingLeft: '0px',
              }}
            >
              <div
                className="uui-logo_component"
                style={{
                  boxSizing: 'border-box',
                  flexWrap: 'nowrap',
                  width: 'auto',
                  height: '2rem',
                  display: 'flex',
                }}
              >
                <img
                  className="uui-logo_logotype"
                  alt="Untitled UI logotext"
                  src="https://cdn.prod.website-files.com/6317a229ebf7723658463b4b/663a6b0d43303ddf38035997_logo-nequi.svg"
                  style={{
                    boxSizing: 'border-box',
                    border: '0px',
                    verticalAlign: 'middle',
                    maxWidth: '100%',
                    display: 'inline-block',
                    flex: '0 0 auto',
                    width: 'auto',
                    height: '100%',
                  }}
                />
              </div>
            </a>
            <nav
              className="uui-navbar03_menu w-nav-menu"
              role="navigation"
              style={{
                boxSizing: 'border-box',
                cssFloat: 'right',
                alignItems: 'center',
                height: '4rem',
                marginLeft: '1.5rem',
                display: 'flex',
                position: 'static',
                flex: '1 1 0%',
                justifyContent: 'flex-end',
              }}
            >
              <div
                className="uui-navbar03_menu-left"
                style={{
                  boxSizing: 'border-box',
                  alignSelf: 'auto',
                  height: '4rem',
                  display: 'flex',
                  marginRight: '3rem',
                }}
              >
                <div
                  className="uui-navbar06_menu-dropdown w-dropdown"
                  style={{
                    boxSizing: 'border-box',
                    textAlign: 'left',
                    zIndex: 900,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'inline-block',
                    position: 'static',
                  }}
                >
                  <div
                    id="w-dropdown-toggle-0"
                    className="uui-navbar06_dropdown-toggle w-dropdown-toggle"
                    aria-controls="w-dropdown-list-0"
                    aria-expanded="false"
                    aria-haspopup="menu"
                    role="button"
                    tabIndex="0"
                    style={{
                      boxSizing: 'border-box',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      verticalAlign: 'top',
                      textAlign: 'left',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      position: 'relative',
                      userSelect: 'none',
                      cursor: 'pointer',
                      padding: '1.75rem 2.5rem 1.75rem 1rem',
                      transition: '0.3s',
                      color: '#200020',
                      alignItems: 'center',
                      height: '4rem',
                      paddingRight: '2.5rem',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 400,
                      display: 'flex',
                    }}
                  >
                    <div
                      className="uui-dropdown-icon w-embed"
                      style={{
                        boxSizing: 'border-box',
                        inset: 'auto 0% auto auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '1.25rem',
                        height: '1.25rem',
                        marginRight: '1rem',
                        display: 'flex',
                        position: 'absolute',
                      }}
                    >
                      <svg
                        height="20"
                        width="20"
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ boxSizing: 'border-box', overflow: 'hidden' }}
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.67"
                          style={{ boxSizing: 'border-box' }}
                        />
                      </svg>
                    </div>
                    <div style={{ boxSizing: 'border-box' }}>Para personas</div>
                  </div>
                  <nav
                    id="w-dropdown-list-0"
                    className="uui-navbar06_dropdown-list w-dropdown-list"
                    aria-labelledby="w-dropdown-toggle-0"
                    style={{
                      boxSizing: 'border-box',
                      background: 'rgb(221, 221, 221)',
                      minWidth: '100%',
                      display: 'none',
                      position: 'absolute',
                      boxShadow:
                        'rgba(0, 0, 0, 0.08) 0px 12px 16px -4px, rgba(16, 24, 40, 0.03) 0px 4px 6px -2px',
                    }}
                  >
                    <div
                      className="uui-navbar06_container"
                      style={{
                        boxSizing: 'border-box',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '80rem',
                        height: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'flex',
                      }}
                    >
                      <div
                        className="uui-navbar06_dropdown-content"
                        style={{
                          boxSizing: 'border-box',
                          width: '100%',
                          display: 'flex',
                        }}
                      >
                        <div
                          className="uui-navbar03_dropdown-content-left"
                          style={{
                            boxSizing: 'border-box',
                            gap: '0px 1.5rem',
                            flex: '1 1 0%',
                            gridTemplateRows: 'auto',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr',
                            gridAutoColumns: '1fr',
                            paddingTop: '2rem',
                            paddingBottom: '2rem',
                            paddingLeft: '0px',
                            display: 'grid',
                          }}
                        >
                          <div
                            className="uui-navbar03_dropdown-link-list"
                            style={{
                              boxSizing: 'border-box',
                              gap: '0.1rem 0px',
                              gridTemplate:
                                '"." min-content "." max-content "." min-content "Area" "." "." "." / 1fr',
                              gridAutoColumns: '1fr',
                              display: 'grid',
                              gridTemplateRows:
                                'min-content max-content min-content auto auto auto auto',
                            }}
                          >
                            <h4
                              className="uui-navbar03_heading"
                              style={{
                                boxSizing: 'border-box',
                                lineHeight: '1.1em',
                                color: '#da0081',
                                letterSpacing: 'normal',
                                marginTop: '0px',
                                marginBottom: '0.25rem',
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              Cómo usar tu plata
                            </h4>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/paga-con-nequi"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <rect
                                        height="7"
                                        width="7"
                                        rx="0.5"
                                        stroke="#200020"
                                        x="3.5"
                                        y="3.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <rect
                                        height="7"
                                        width="7"
                                        rx="0.5"
                                        stroke="#200020"
                                        x="13.5"
                                        y="3.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <rect
                                        height="7"
                                        width="7"
                                        rx="0.5"
                                        stroke="#200020"
                                        x="3.5"
                                        y="13.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <rect
                                        height="7"
                                        width="7"
                                        rx="0.5"
                                        stroke="#200020"
                                        x="13.5"
                                        y="13.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Productos y servicios
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Descubre todo lo que puedes hacer desde tu app
                                  Nequi.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/usa-tu-plata"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M30.9605 4H17.1447C14.8557 4 13 5.79086 13 8V40C13 42.2091 14.8557 44 17.1447 44H30.9605C33.2496 44 35.1053 42.2091 35.1053 40V8C35.1053 5.79086 33.2496 4 30.9605 4Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M20.7 4H19.2"
                                        stroke="#ECE7F5"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M28.8999 4H27.3999"
                                        stroke="#ECE7F5"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M19.9473 4.74994V4.99998C19.9473 5.37222 20.0914 5.7292 20.3481 5.99241C20.6047 6.25562 20.9528 6.40349 21.3157 6.40349H26.7894C27.1523 6.40349 27.5004 6.25562 27.757 5.99241C28.0136 5.7292 28.1578 5.37222 28.1578 4.99998V4.74994"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M23.5544 28V26.9554H24.5241V28H23.5544ZM23.5544 21.0446V20H24.5241V21.0446H23.5544ZM24.0463 27.2601C23.678 27.2601 23.3488 27.1774 23.0588 27.012C22.7689 26.8437 22.5324 26.6072 22.3494 26.3025C22.1664 25.9949 22.0499 25.6322 22 25.2144L22.9626 25.0316C23.0267 25.374 23.161 25.6467 23.3654 25.8498C23.5722 26.053 23.8182 26.1545 24.1034 26.1545C24.372 26.1545 24.5942 26.0776 24.7701 25.9238C24.9483 25.77 25.0374 25.58 25.0374 25.3536C25.0374 25.1999 24.9982 25.0736 24.9198 24.975C24.8437 24.8734 24.7237 24.7907 24.5597 24.7269L23.2906 24.2481C22.5585 23.9724 22.1925 23.4269 22.1925 22.6115C22.1925 22.2285 22.2662 21.8963 22.4135 21.6148C22.5633 21.3333 22.7736 21.1172 23.0446 20.9663C23.3179 20.8125 23.6399 20.737 24.0107 20.7399C24.3506 20.7457 24.6524 20.8212 24.9162 20.9663C25.18 21.1085 25.3999 21.3159 25.5758 21.5887C25.754 21.8585 25.8835 22.1879 25.9643 22.5767L24.9661 22.7943C24.9329 22.6086 24.8711 22.4461 24.7807 22.3069C24.6904 22.1647 24.5775 22.0544 24.4421 21.9761C24.309 21.8948 24.1604 21.8513 23.9964 21.8455C23.8396 21.8397 23.697 21.8672 23.5686 21.9282C23.4427 21.9891 23.3417 22.0747 23.2656 22.185C23.1919 22.2923 23.1551 22.4142 23.1551 22.5506C23.1551 22.7015 23.2074 22.8321 23.3119 22.9423C23.4165 23.0497 23.5829 23.1425 23.8111 23.2209L24.7166 23.5343C25.1705 23.6939 25.4973 23.91 25.697 24.1828C25.899 24.4556 26 24.8168 26 25.2666C26 25.6612 25.918 26.008 25.754 26.3069C25.59 26.6057 25.3607 26.8393 25.066 27.0076C24.7736 27.1759 24.4337 27.2601 24.0463 27.2601Z"
                                        fill="#200020"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M31 25.1572V23.9918C31 20.1308 27.861 17 23.9896 17C22.9365 16.9987 21.8966 17.2349 20.9474 17.691C19.9982 18.147 19.1641 18.8113 18.5073 19.6342M17 22.8409V24.0063C17 27.8715 20.1375 31 24.0104 31C25.0605 30.9985 26.0971 30.7628 27.0446 30.31C27.992 29.8573 28.8265 29.199 29.4872 28.383"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M15 24L16.9556 22L19 24"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M33 24L31.0444 26L29 24"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Usa tu plata
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Mueve y organiza la plata desde tu Nequi
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/usa-tu-plata/transfiya"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      viewBox="0.4000000000000057 0 1037.1 326"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <lineargradient
                                        id="a"
                                        gradientUnits="userSpaceOnUse"
                                        x1="586.748"
                                        x2="930.625"
                                        y1="24.894"
                                        y2="24.894"
                                        style={{ boxSizing: 'border-box' }}
                                      >
                                        <stop
                                          offset="0"
                                          stopColor="#f4911e"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <stop
                                          offset="1"
                                          stopColor="#ffd504"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </lineargradient>
                                      <path
                                        d="M929 42.8c-6.2 13.8-27.6 3.3-37 0-23.3-7.5-46.9-13.7-70.8-18.4-29.7-5.8-54.5-6.9-85-5.2-26.8.9-53.4 3.8-79.7 8.6-21 3.8-39.4 11.3-59.1 18.9-3.2 1.2-8.6 3.2-10.2 1.2-2.8-3.5 5.7-7.8 7.6-8.8 43.8-22 90.1-34.3 139-36.9L775.3 0h28.5c18.9.9 36.9 3 54.1 6.3 9.8 1.9 21.3 4.4 34.5 7.6 10.3 2.3 19.2 5 26.8 8.2 9 3.7 14.2 10.9 9.8 20.7z"
                                        fill="url(#a)"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M576.1 71.9c0 25.7-20.9 46.6-46.6 46.6s-46.6-20.9-46.6-46.6c0-25.7 20.9-46.6 46.6-46.6 25.8 0 46.6 20.9 46.6 46.6zm-28.4 0c0-10-8.1-18.1-18.1-18.1s-18.2 8.1-18.2 18.1c0 10 8.1 18.2 18.2 18.2 9.9-.1 18.1-8.2 18.1-18.2z"
                                        fill="#f4911e"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M1037.5 72.2c0 25.7-20.9 46.6-46.6 46.6s-46.6-20.9-46.6-46.6 20.9-46.6 46.6-46.6 46.6 20.9 46.6 46.6zm-28.5 0c0-10-8.1-18.2-18.2-18.2-10 0-18.2 8.1-18.2 18.1 0 10 8.1 18.1 18.2 18.1 10.1.1 18.2-8 18.2-18z"
                                        fill="#ffd504"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <g
                                        fill="#062e87"
                                        style={{ boxSizing: 'border-box' }}
                                      >
                                        <path
                                          d="M644.8 138.5h34.6c.4 0 .5.2.5.6l-3.6 18.4c-.1.4-.3.6-.7.6H642c-.5 0-1 .4-1.1.9l-20.8 107c-.1.4-.3.6-.7.6H598c-.3 0-.5-.2-.5-.5v-.1l20.9-107.4c.1-.3-.1-.5-.4-.5h-19.9c-.3 0-.6-.3-.6-.6v-.1l3.3-18.3c.1-.4.3-.5.6-.5h20.3c.4 0 .7-.3.8-.6 1.6-9.9 3.1-16.7 4.4-20.6 11.6-33.3 38.4-33.1 68.6-29.2.3 0 .5.3.4.6v.1l-4.4 16.6c-.1.5-.5.8-1 .7-8.9-.4-21.3-1.8-28.6.7-13.2 4.6-15.6 19.4-17.6 31.2-.1.2.1.4.5.4z"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <ellipse
                                          cx="720.8"
                                          cy="101.3"
                                          rx="13.3"
                                          ry="12.6"
                                          transform="rotate(-45.3 720.752 101.295)"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M20.8 158H1c-.2 0-.4-.2-.4-.4v-.1L4 139c.1-.3.2-.5.6-.5h20c.4 0 .7-.2.8-.6l5.1-26.6c.1-.3.3-.5.6-.5h21.5c.3 0 .6.2.6.5v.1L47.8 138c-.1.3.1.5.4.5h34c.3 0 .6.3.6.6v.1L79.4 157c-.1.7-.5 1-1.2 1H44.5c-.4 0-.6.2-.7.6-4.5 23.2-9 46.4-13.5 69.5-.5 2.3-.4 5 .2 8.1 3.1 16.5 22.9 13.2 32.8 6.2.2-.2.6-.1.7.1 0 .1.1.1.1.2l4.4 16.6c.1.5-.1.9-.5 1.2-28.5 17.1-67.6 5.6-59.7-35 4.4-22.3 8.7-44.6 12.9-66.9.1-.4-.1-.6-.4-.6zM968.7 257.7c0-.1-.1-.2-.2-.2h-.2c-27 23.8-67.9 15.6-83.1-17.1-9.6-20.6-6.9-47.1 2.9-66.8 13.2-26.5 40.7-40.7 70-36.7 10.7 1.5 21.7 6.8 27.5 16.3.1.2.3.2.4.1l.2-.2 2.7-14.2c.1-.3.2-.4.5-.4h43.5c.3 0 .5.2.4.5l-24.9 129.3c-.1.4-.4.7-.8.7h-40.7c-.3 0-.6-.2-.6-.6v-.1zm-6.7-83.5c-36-11.1-51.6 49-24 58.3 15.6 5.2 30-2 36.1-16.6 6-14.2 6.2-36.1-12.1-41.7zM136.4 156.3c0 .1.1.3.2.3s.2 0 .3-.1c11.7-14.3 29.4-19.5 47.4-18.9.3 0 .6.3.6.6v.1l-3.9 21.1c-.1.5-.4.7-.9.6-27-2.3-45.2 12.5-50.5 38.8-4.5 22.3-8.9 44.7-13.2 67.1-.1.3-.4.6-.7.6H94.3c-.5 0-.7-.2-.6-.7l24.3-127c0-.1.1-.2.3-.2h20.8c.4 0 .6.2.5.6zM299.3 159.1c.1.2.4.3.6.1.1-.1.2-.2.2-.3l3.8-20c.1-.3.3-.5.6-.5H326c.3 0 .5.2.4.5l-24.2 126.8c-.1.4-.3.7-.8.7h-20.3c-.3 0-.6-.2-.6-.6v-.1l2.7-13.8c.1-.6-.1-.7-.5-.3-17.6 16-39.9 18.6-62.6 14.4-21.8-4-31.3-19.7-33.7-40.4-4.6-40 8.6-79.4 53.2-87.1 22.2-3.6 47.4-.4 59.7 20.6zM209 219.8c1.2 11.3 6.4 21.7 18 25.2 25.6 7.7 52.7-2.6 62.1-28.9 7.5-21.1 6-50-20.3-56.7-15.5-3.9-36.4-.8-47.7 11.5-11.4 12.3-13.8 32.7-12.1 48.9zM371.6 154c0 .1.1.2.2.3.1 0 .1 0 .2-.1 16.2-16.3 45-21.7 66-12.6 20.5 8.8 25.1 30.2 21.3 51.3-4.5 24.3-9.1 48.7-13.8 73-.1.4-.3.6-.8.6h-21.2c-.5 0-.7-.2-.6-.7 4.6-23.8 9.1-47.1 13.3-69.8 1.8-9.2 2.6-18.5-2.1-26.4-6.6-11.1-21.5-12.3-33.2-10.6-21.2 3.2-32.7 18.6-36.7 38.8-4.5 22.7-8.9 45.5-13.3 68.3-.1.3-.2.5-.5.5H329c-.3 0-.6-.3-.6-.6v-.1L352.6 139c.1-.3.3-.4.5-.4h20.6c.4 0 .6.2.5.6zM479 260.6c-2.9-1.1-8.7-4-12.3-7-.3-.3-.4-.7-.2-1L476 235c.1-.3.5-.4.7-.2h.1c16.4 12.7 50.5 18 67.9 6.9 7.3-4.7 9.5-17.1.9-22.3-3.1-1.9-6.8-3.3-10.9-4.3-16.8-4-39.8-6.9-48-21.4-6.2-11-4.3-26.1 2.9-36.3 18.4-26.1 67.4-24.2 91.8-8.9.4.2.5.6.3 1l-8.4 17.5c-.2.4-.4.4-.8.2-13.8-9-32-11.6-48-8.7-9.3 1.7-19.5 7.8-19.1 18.5.9 23.6 66.4 9 68 46.3 1 24.2-15 38.2-37.2 42.5-19.6 3.8-38.7 2-57.2-5.2zM703.5 266.5l-21.9.3c-.2 0-.3-.1-.3-.3v-.1L703.6 139c0-.1.2-.3.3-.3l21.9-.4c.2 0 .3.1.3.3v.1l-22.4 127.5c.1.2-.1.3-.2.3zM744.1 326h-.9l-8.1-31.3c-.1-.3 0-.6.3-.7 11.8-6.1 25.8-13.6 35.3-23 .5-.5.7-1.3.6-2L743 139c0-.2.1-.5.3-.5h43.4c.2 0 .4.1.4.3l15.5 78.8c0 .1.1.2.3.2.1 0 .1-.1.2-.1l45.6-78.7c.2-.3.4-.4.8-.4h42.3c.5 0 .6.2.4.7-27 45.7-54.1 91.5-81.2 137.3-13.1 22-43.4 39.9-66.9 49.4z"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Transfiya
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Envía y recibe plata por Transfiya desde
                                  Nequi.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/usa-tu-plata/canales-nequi"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M12 7L12 21L36 21L36 18.5L36 17L36 7C36 4.79086 34.2091 3 32 3L16 3C13.7909 3 12 4.79086 12 7Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M19 18C19.5731 15.6997 21.5944 14 24 14C26.4056 14 28.4269 15.6997 29 18"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M16 13V9C16 7.89543 16.8954 7 18 7H30C31.1046 7 32 7.89543 32 9V13"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M7.75 21C7.75 19.2051 9.20507 17.75 11 17.75H37C38.7949 17.75 40.25 19.2051 40.25 21V39C40.25 43.0041 37.0041 46.25 33 46.25H15C10.9959 46.25 7.75 43.0041 7.75 39V21Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M36 17L36 18.5"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M12 17L12 18.5"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_text-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    gap: '0px 0.5rem',
                                    alignItems: 'center',
                                    marginBottom: '0.25rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading margin-bottom-0"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                      marginBottom: '0px',
                                    }}
                                  >
                                    Corresponsales y cajeros
                                  </div>
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  <span style={{ boxSizing: 'border-box' }}>
                                    Recarga o saca plata de tu Nequi
                                  </span>
                                </div>
                              </div>
                            </a>
                            <h4
                              className="uui-navbar03_heading"
                              style={{
                                boxSizing: 'border-box',
                                lineHeight: '1.1em',
                                color: '#da0081',
                                letterSpacing: 'normal',
                                marginTop: '0px',
                                marginBottom: '0.25rem',
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              Créditos Nequi
                            </h4>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/creditos"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M18 42V45"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M30 42V45"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M5 31.5H12V21L3.99226 25.6712C3.37782 26.0296 3 26.6874 3 27.3987V29.5C3 30.6046 3.89543 31.5 5 31.5Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M43 31.5H36V21L44.0077 25.6712C44.6222 26.0296 45 26.6874 45 27.3987V29.5C45 30.6046 44.1046 31.5 43 31.5Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M24 35.8636V10.7727C24 7.3084 21.3137 4.5 18 4.5C14.6863 4.5 12 7.3084 12 10.7727V34.0994C12 35.0738 12.7555 35.8636 13.6875 35.8636H15V37.2358C15 38.2101 15.7555 39 16.6875 39H19.3125C20.2445 39 21 38.2101 21 37.2358V35.8636H24Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M24 35.8636V10.7727C24 7.3084 26.6863 4.5 30 4.5C33.3137 4.5 36 7.3084 36 10.7727V34.0994C36 35.0738 35.2445 35.8636 34.3125 35.8636H33V37.2358C33 38.2101 32.2445 39 31.3125 39H28.6875C27.7555 39 27 38.2101 27 37.2358V35.8636H24Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M23.25 35.85H24.57H24.75"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M11.2 31.5H13"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M11.25 21.3H13.05"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M35 21.3H36.8"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M35 31.5H36.8"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Créditos
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Obtén tu crédito hasta por 25 millones.
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="uui-navbar03_dropdown-link-list"
                            style={{
                              boxSizing: 'border-box',
                              gap: '0.1rem 0px',
                              gridTemplate:
                                '"." min-content "." max-content "." min-content "Area" "." "." "." / 1fr',
                              gridAutoColumns: '1fr',
                              display: 'grid',
                              gridTemplateRows:
                                'min-content max-content min-content auto auto auto auto',
                            }}
                          >
                            <h4
                              className="uui-navbar03_heading"
                              style={{
                                boxSizing: 'border-box',
                                lineHeight: '1.1em',
                                color: '#da0081',
                                letterSpacing: 'normal',
                                marginTop: '0px',
                                marginBottom: '0.25rem',
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              Paga con Nequi
                            </h4>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/paga-con-nequi/tarjeta-nequi"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <rect
                                        height="40.5"
                                        width="25.5"
                                        fill="#ECE7F5"
                                        rx="3.25"
                                        stroke="#200020"
                                        strokeWidth="1.5"
                                        x="11.0356"
                                        y="4.17859"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M14.5713 40.1786L14.5713 31.9286L14.5713 23.6786"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M30 14L30 10C30 9.44772 29.5523 9 29 9L27 9C26.4477 9 26 9.44772 26 10L26 14C26 14.5523 26.4477 15 27 15L29 15C29.5523 15 30 14.5523 30 14Z"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Tarjeta Nequi Visa
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Conoce la tarjeta débito sin cuota de manejo.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/paga-con-nequi/usa-qr"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 88 88"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M63.8808 23.0437L70.2073 16"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M66.8072 26.0689L74.2025 20.0285"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M68.5132 29.1935L77.4172 25.3003"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M48 66.6321V72.1303C48 74.8193 45.9374 77 43.3941 77H14.6059C12.0626 77 10 74.8193 10 72.1303V16.8697C10 14.1807 12.0626 12 14.6059 12H43.3941C45.9374 12 48 14.1807 48 16.8697V21.0343"
                                        stroke="#200020"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M46 67C58.7025 67 69 56.7025 69 44C69 31.2975 58.7025 21 46 21C33.2975 21 23 31.2975 23 44C23 56.7025 33.2975 67 46 67Z"
                                        stroke="#200020"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M42 71L16 71"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M36 30H32.5535C32.2465 30 32 30.2466 32 30.5535V34"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M32 54V57.4465C32 57.7535 32.2465 58 32.5535 58H36"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M56 30H59.4465C59.7535 30 60 30.2465 60 30.5535V34"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M60 54V57.4465C60 57.7535 59.7535 58 59.4465 58H56"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M46 32L46 56"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M58 44L34 44"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M55.2894 41H50.7106C49.7631 41 49 40.2318 49 39.2894V34.7106C49 33.7631 49.7682 33 50.7106 33H55.2894C56.2369 33 57 33.7683 57 34.7106V39.2894C57.0051 40.2369 56.2369 41 55.2894 41Z"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M55.2894 55H50.7106C49.7631 55 49 54.2318 49 53.2894V48.7106C49 47.7631 49.7682 47 50.7106 47H55.2894C56.2369 47 57 47.7683 57 48.7106V53.2894C57.0051 54.2369 56.2369 55 55.2894 55Z"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M41.2894 55H36.7106C35.7631 55 35 54.2318 35 53.2894V48.7106C35 47.7631 35.7682 47 36.7106 47H41.2894C42.2369 47 43 47.7683 43 48.7106V53.2894C43.0051 54.2369 42.2369 55 41.2894 55Z"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M42.9949 38.9386V40.1714C42.9949 40.6266 42.6264 41 42.1657 41H35.8292C35.3736 41 35 40.6317 35 40.1714V33.8287C35 33.3734 35.3685 33 35.8292 33H42.1708C42.6264 33 43 33.3683 43 33.8287V35.5831"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M53 52C52.4477 52 52 51.5524 52 51C52 50.4477 52.4477 50 53 50C53.5523 50 54 50.4477 54 51C54 51.5524 53.5523 52 53 52Z"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M53 38C52.4477 38 52 37.5524 52 37C52 36.4477 52.4477 36 53 36C53.5523 36 54 36.4477 54 37C54 37.5524 53.5523 38 53 38Z"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M39 52C38.4477 52 38 51.5524 38 51C38 50.4477 38.4477 50 39 50C39.5523 50 40 50.4477 40 51C40 51.5524 39.5523 52 39 52Z"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M39 38C38.4477 38 38 37.5524 38 37C38 36.4477 38.4477 36 39 36C39.5523 36 40 36.4477 40 37C40 37.5524 39.5523 38 39 38Z"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Usa QR
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Olvídate del efectivo y paga sólo con tu
                                  celular.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/promociones"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 32 32"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M27.2029 3H19.5217C19.2828 2.99983 19.0536 3.0942 18.8842 3.2625L3.52793 18.6188C3.19169 18.9566 3.00293 19.4139 3.00293 19.8906C3.00293 20.3673 3.19169 20.8246 3.52793 21.1625L10.8404 28.475C11.1783 28.8112 11.6356 29 12.1123 29C12.589 29 13.0463 28.8112 13.3842 28.475L28.7342 13.125C28.9025 12.9555 28.9969 12.7263 28.9967 12.4875V4.8C28.9978 4.56383 28.9523 4.32975 28.8626 4.11125C28.773 3.89276 28.641 3.69414 28.4743 3.52685C28.3075 3.35956 28.1094 3.22688 27.8912 3.13646C27.673 3.04605 27.4391 2.99967 27.2029 3Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.3"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M24 9.5C23.7033 9.5 23.4133 9.41203 23.1666 9.24721C22.92 9.08238 22.7277 8.84811 22.6142 8.57403C22.5007 8.29994 22.4709 7.99834 22.5288 7.70737C22.5867 7.4164 22.7296 7.14912 22.9393 6.93934C23.1491 6.72956 23.4164 6.5867 23.7074 6.52882C23.9983 6.47095 24.2999 6.50065 24.574 6.61418C24.8481 6.72771 25.0824 6.91997 25.2472 7.16665L25.663 6.88886L25.2472 7.16665C25.412 7.41332 25.5 7.70333 25.5 8C25.5 8.39783 25.342 8.77936 25.0607 9.06066C24.7794 9.34197 24.3978 9.5 24 9.5Z"
                                        fill="white"
                                        stroke="#DA0081"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M10.8149 20.21L11.5771 19.4478L12.1645 20.0352L11.4022 20.7974L10.8149 20.21ZM16.1111 14.9138L16.8766 14.1483L17.464 14.7356L16.6985 15.5012L16.1111 14.9138ZM11.7091 19.9956C11.3879 19.6744 11.1558 19.3279 11.0128 18.9561C10.8743 18.5843 10.8281 18.2103 10.8743 17.8342C10.9226 17.4558 11.0656 17.0972 11.3032 16.7584L11.9764 17.2402C11.7542 17.6032 11.6706 17.9838 11.7256 18.3819C11.7828 18.7823 11.972 19.1431 12.2932 19.4643C12.6166 19.7877 12.9564 19.9714 13.3128 20.0154C13.6692 20.0593 13.9706 19.9582 14.217 19.7118C14.3974 19.5314 14.4887 19.3323 14.4909 19.1145C14.4953 18.8989 14.4106 18.6272 14.2368 18.2994L13.4877 16.8772C13.0411 16.0259 13.1038 15.3142 13.6758 14.7422C13.9442 14.4738 14.2434 14.3044 14.5734 14.234C14.9077 14.1636 15.2476 14.1911 15.593 14.3165C15.9428 14.4419 16.2739 14.663 16.5863 14.9798C16.8898 15.2878 17.1054 15.6178 17.233 15.9698C17.3628 16.3195 17.4024 16.6759 17.3518 17.0389C17.3034 17.4041 17.1626 17.7583 16.9294 18.1014L16.2266 17.6164C16.3828 17.3986 16.4785 17.1665 16.5137 16.9201C16.5511 16.6759 16.528 16.435 16.4444 16.1974C16.363 15.9577 16.2233 15.7366 16.0253 15.5342C15.8405 15.345 15.6414 15.2075 15.428 15.1217C15.2168 15.0381 15.0111 15.0106 14.8109 15.0392C14.6108 15.0678 14.437 15.1558 14.2896 15.3032C14.129 15.4638 14.052 15.6596 14.0586 15.8906C14.0696 16.1215 14.1642 16.4053 14.3424 16.7419L14.9693 17.8969C15.2443 18.405 15.3697 18.845 15.3455 19.2168C15.3235 19.5864 15.1486 19.9351 14.8208 20.2628C14.5371 20.5466 14.2181 20.7248 13.8639 20.7974C13.5119 20.8722 13.1489 20.8414 12.775 20.705C12.4032 20.5708 12.0479 20.3343 11.7091 19.9956Z"
                                        fill="#DA0081"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Promociones
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Disfruta promociones exclusivas usando tu
                                  Nequi.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/paga-con-nequi/tienda-virtual"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 32 32"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M20.6404 2.66669H11.4299C9.90386 2.66669 8.66675 3.86059 8.66675 5.33335V26.6667C8.66675 28.1394 9.90386 29.3334 11.4299 29.3334H20.6404C22.1665 29.3334 23.4036 28.1394 23.4036 26.6667V5.33335C23.4036 3.86059 22.1665 2.66669 20.6404 2.66669Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.3"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M13.2981 3.33331C13.2981 3.58147 13.3942 3.81946 13.5653 3.99493C13.7364 4.17041 13.9684 4.26899 14.2104 4.26899H17.8595C18.1015 4.26899 18.3335 4.17041 18.5046 3.99493C18.6757 3.81946 18.7718 3.58147 18.7718 3.33331"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.3"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M13.8 2.66669H12.8"
                                        stroke="#ECE7F5"
                                        strokeLinejoin="round"
                                        strokeWidth="1.3"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M19.2666 2.66669H18.2666"
                                        stroke="#ECE7F5"
                                        strokeLinejoin="round"
                                        strokeWidth="1.3"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M13.9167 20.5833C14.1468 20.5833 14.3333 20.3968 14.3333 20.1667C14.3333 19.9365 14.1468 19.75 13.9167 19.75C13.6865 19.75 13.5 19.9365 13.5 20.1667C13.5 20.3968 13.6865 20.5833 13.9167 20.5833Z"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M19.7499 20.5833C19.98 20.5833 20.1666 20.3968 20.1666 20.1667C20.1666 19.9365 19.98 19.75 19.7499 19.75C19.5198 19.75 19.3333 19.9365 19.3333 20.1667C19.3333 20.3968 19.5198 20.5833 19.7499 20.5833Z"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M10.5833 11.4166H12.2499L13.4999 18.5H20.1666"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M13.4998 16.8333H19.9957C20.0439 16.8333 20.0906 16.8167 20.1278 16.7861C20.1651 16.7556 20.1906 16.7131 20.2001 16.6658L20.9501 12.9158C20.9561 12.8856 20.9554 12.8544 20.9479 12.8245C20.9405 12.7946 20.9264 12.7667 20.9069 12.7428C20.8873 12.719 20.8627 12.6998 20.8348 12.6866C20.807 12.6734 20.7765 12.6666 20.7457 12.6666H12.6665"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_text-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    gap: '0px 0.5rem',
                                    alignItems: 'center',
                                    marginBottom: '0.25rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading margin-bottom-0"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                      marginBottom: '0px',
                                    }}
                                  >
                                    Tienda virtual
                                  </div>
                                  <div
                                    className="uui-badge-small-success"
                                    style={{
                                      boxSizing: 'border-box',
                                      whiteSpace: 'nowrap',
                                      borderRadius: '10rem',
                                      padding: '0.125rem 0.5rem',
                                      columnGap: '0.25rem',
                                      backgroundColor: '#ecfdf3',
                                      color: '#027a48',
                                      mixBlendMode: 'multiply',
                                      alignItems: 'center',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.75rem',
                                      fontWeight: 500,
                                      display: 'flex',
                                    }}
                                  >
                                    <div style={{ boxSizing: 'border-box' }}>
                                      Nuevo
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  <span style={{ boxSizing: 'border-box' }}>
                                    En la{' '}
                                  </span>
                                  <span style={{ boxSizing: 'border-box' }}>
                                    Tienda Virtual Nequi
                                  </span>
                                  <span style={{ boxSizing: 'border-box' }}>
                                    {' '}
                                    acumulas plata. 
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/paga-con-nequi/tus-llaves"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M10.2234 7.83609C10.2234 8.44547 10.2234 9.03609 10.4156 9.58922C8.39531 11.9611 3.06094 18.2283 2.56406 18.7064C2.46531 18.795 2.38631 18.9034 2.3322 19.0245C2.27809 19.1457 2.25009 19.2769 2.25 19.4095C2.25 19.808 2.49375 20.1923 2.7 20.408C3.00937 20.7314 4.33125 21.9548 4.575 21.7205C5.29687 21.0173 5.44219 20.8298 5.7375 20.5392C6.18281 20.1033 5.69062 19.2127 5.84531 18.8517C6 18.4908 6.16406 18.4205 6.43125 18.3642C6.69844 18.308 7.17187 18.5002 7.54219 18.5048C7.93125 18.5095 8.14219 18.3455 8.43281 18.0736C8.66719 17.858 8.83594 17.6564 8.84063 17.3423C8.85 16.9205 8.24063 16.3627 8.69531 15.9173C9.15 15.472 9.80625 16.208 10.2891 16.1517C10.7719 16.0955 11.3578 15.4252 11.4188 15.1392C11.4797 14.8533 10.8703 14.1173 10.9641 13.7002C10.9969 13.5595 11.2828 13.2314 11.4984 13.1845C11.7141 13.1377 12.6703 13.508 12.8859 13.4611C13.1484 13.4048 13.4531 13.1283 13.7016 12.9736C14.4281 13.2877 15.0891 13.4142 15.9375 13.4142C19.1484 13.4142 21.75 10.9111 21.75 7.82672C21.75 4.74234 19.1484 2.25 15.9375 2.25C12.7266 2.25 10.2234 4.75172 10.2234 7.83609ZM18.75 6.75C18.75 7.04667 18.662 7.33668 18.4972 7.58336C18.3324 7.83003 18.0981 8.02229 17.824 8.13582C17.5499 8.24935 17.2483 8.27906 16.9574 8.22118C16.6664 8.1633 16.3991 8.02044 16.1893 7.81066C15.9796 7.60088 15.8367 7.33361 15.7788 7.04264C15.7209 6.75166 15.7506 6.45006 15.8642 6.17598C15.9777 5.90189 16.17 5.66762 16.4166 5.5028C16.6633 5.33797 16.9533 5.25 17.25 5.25C17.6478 5.25 18.0294 5.40804 18.3107 5.68934C18.592 5.97064 18.75 6.35218 18.75 6.75Z"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_text-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    gap: '0px 0.5rem',
                                    alignItems: 'center',
                                    marginBottom: '0.25rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading margin-bottom-0"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                      marginBottom: '0px',
                                    }}
                                  >
                                    Tus llaves
                                  </div>
                                  <div
                                    className="uui-badge-small-success"
                                    style={{
                                      boxSizing: 'border-box',
                                      whiteSpace: 'nowrap',
                                      borderRadius: '10rem',
                                      padding: '0.125rem 0.5rem',
                                      columnGap: '0.25rem',
                                      backgroundColor: '#ecfdf3',
                                      color: '#027a48',
                                      mixBlendMode: 'multiply',
                                      alignItems: 'center',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.75rem',
                                      fontWeight: 500,
                                      display: 'flex',
                                    }}
                                  >
                                    <div style={{ boxSizing: 'border-box' }}>
                                      Nuevo
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Registra tus llaves y empieza a recibir plata
                                  al instante.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/tarifas-nequi"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M15.6091 4V43H36.6092C38.4657 43 40.2461 42.2098 41.5589 40.8033C42.8716 39.3968 43.6091 37.4891 43.6091 35.5L43.609 4L40.8099 5.5L38.009 4L35.1846 5.5L32.3907 4L29.6091 5.5L26.8362 4L24.0038 5.5L21.2091 4L18.4091 5.5L15.6091 4Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M21.2148 17.2775L21.2537 17.3088C21.3809 17.1508 21.5505 17.0271 21.7641 16.9385C21.9814 16.8501 22.2238 16.8097 22.4922 16.8182L22.4922 16.8182C22.7724 16.8267 23.0248 16.8903 23.2504 17.0084L23.2504 17.0084L23.2514 17.0089C23.4814 17.1229 23.6728 17.2831 23.8261 17.4901L23.8264 17.4904C23.9797 17.693 24.0849 17.9298 24.1418 18.2017C24.1474 18.2284 24.1732 18.2457 24.1999 18.2407L25.9468 17.9142C25.9603 17.9117 25.9721 17.9037 25.9796 17.8922C25.987 17.8807 25.9894 17.8666 25.9862 17.8533C25.8435 17.2645 25.6142 16.7639 25.2974 16.3527C24.9847 15.9372 24.5936 15.6208 24.1245 15.4041C23.9182 15.3068 23.699 15.2303 23.4671 15.1742V14C23.4671 13.9724 23.4447 13.95 23.4171 13.95H21.7201C21.6925 13.95 21.6701 13.9724 21.6701 14V15.129C21.3575 15.1857 21.0695 15.2774 20.8064 15.4043C20.3241 15.6345 19.9486 15.9651 19.6812 16.3958L19.681 16.3961C19.4176 16.8274 19.2869 17.3351 19.2869 17.9173C19.2869 18.538 19.4496 19.0597 19.7779 19.4791C20.1059 19.8982 20.5959 20.2108 21.2431 20.4197L23.4637 21.1377C23.4637 21.1378 23.4638 21.1378 23.4639 21.1378C23.7462 21.232 23.947 21.3523 24.072 21.4954L24.072 21.4954L24.073 21.4965C24.2004 21.6339 24.2655 21.8105 24.2655 22.0305C24.2655 22.3517 24.1191 22.6227 23.8179 22.8455L23.8176 22.8457C23.5203 23.0686 23.1426 23.1818 22.6809 23.1818C22.1929 23.1818 21.774 23.0332 21.4217 22.7365C21.0734 22.4398 20.8436 22.0408 20.7333 21.5367C20.7277 21.5107 20.7027 21.4937 20.6765 21.498L18.992 21.7722C18.9652 21.7766 18.9467 21.8015 18.9505 21.8284C19.0388 22.462 19.2451 23.0137 19.5703 23.4823L19.5705 23.4824C19.8956 23.9464 20.3159 24.3066 20.8307 24.5627L20.831 24.5629C21.093 24.691 21.3728 24.7864 21.6701 24.8492V26C21.6701 26.0276 21.6925 26.05 21.7201 26.05H23.4171C23.4447 26.05 23.4671 26.0276 23.4671 26V24.8603C23.7982 24.7969 24.1051 24.6956 24.3875 24.5563C24.9107 24.3002 25.3193 23.9439 25.6116 23.4872C25.9043 23.03 26.05 22.5003 26.05 21.8999C26.05 21.2164 25.8707 20.6619 25.5076 20.2416C25.1495 19.8223 24.5674 19.4943 23.7684 19.2535L23.7682 19.2535L22.1836 18.7834L22.1835 18.7834C21.7871 18.6667 21.5042 18.5301 21.3292 18.3762C21.1558 18.2194 21.0714 18.0366 21.0714 17.8259C21.0714 17.6328 21.1319 17.461 21.2538 17.3087L21.2148 17.2775ZM21.2148 17.2775C21.3479 17.1121 21.5247 16.9837 21.7451 16.8923L22.1693 18.8313C21.7701 18.7138 21.4789 18.5745 21.2959 18.4135C21.1129 18.2481 21.0214 18.0522 21.0214 17.8259C21.0214 17.6213 21.0859 17.4385 21.2148 17.2775Z"
                                        fill="#DA0081"
                                        stroke="#DA0081"
                                        strokeLinejoin="round"
                                        strokeWidth="0.1"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M31.7089 40.6202C33.1122 42.1439 35.0155 42.9999 37 42.9999L12.4828 43C5.63048 43 5.00006 38.125 5.00006 31.6251C4.99831 31.4111 5.03583 31.199 5.11042 31.001C5.18501 30.803 5.29518 30.6231 5.43449 30.4718C5.57381 30.3205 5.73948 30.2009 5.92184 30.1199C6.1042 30.0389 6.29959 29.9982 6.4966 30.0001L29.5173 30V34.875C29.5173 37.0299 30.3056 39.0965 31.7089 40.6202Z"
                                        fill="white"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M30 15L40 15"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M30 20H40"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M30 25H40"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  ‍
                                  <strong
                                    style={{
                                      boxSizing: 'border-box',
                                      fontWeight: 700,
                                    }}
                                  >
                                    ¿Cuánto cuesta usar Nequi?
                                  </strong>{' '}
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  En Nequi, casi todo es gratis ¡Descubre aquí
                                  las tarifas!
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="uui-navbar03_dropdown-link-list"
                            style={{
                              boxSizing: 'border-box',
                              gap: '0.1rem 0px',
                              gridTemplate:
                                '"." min-content "." max-content "." min-content "Area" "." "." "." / 1fr',
                              gridAutoColumns: '1fr',
                              display: 'grid',
                              gridTemplateRows:
                                'min-content max-content min-content auto auto auto auto',
                            }}
                          >
                            <h4
                              className="uui-navbar03_heading"
                              style={{
                                boxSizing: 'border-box',
                                lineHeight: '1.1em',
                                color: '#da0081',
                                letterSpacing: 'normal',
                                marginTop: '0px',
                                marginBottom: '0.25rem',
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              Mi Nequi
                            </h4>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/mi-nequi/cuentas-nequi/cuenta-de-ahorros"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 200 200"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M126.61 154H61.01V45.29H115.68L115.6 71.39L141.7 71.32V138.9C141.7 147.24 134.94 154 126.6 154H126.61Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M76.1 83.84H122.31"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M76.1 97.01H100.04"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M76.1 108.98H100.04"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M76.1 121.68H100.04"
                                        stroke="#DA0081"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M152.24 112.71C152.24 125.48 141.88 135.84 129.11 135.84C116.34 135.84 105.98 125.48 105.98 112.71C105.98 99.94 116.34 89.58 129.11 89.58C138.69 89.58 146.91 95.4 150.42 103.71"
                                        fill="white"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M152.24 112.71C152.01 112.71 151.78 112.71 151.55 112.71H151.52C151.52 112.71 151.48 112.73 151.46 112.73C151.42 112.75 151.38 112.77 151.35 112.8C151.29 112.86 151.25 112.94 151.24 113.02L151.16 114.5C151.16 114.67 151.29 114.83 151.47 114.85L152.78 114.97C152.96 114.99 153.12 114.85 153.12 114.66L153.2 113.05C153.2 112.96 153.17 112.87 153.12 112.81C153.09 112.78 153.06 112.75 153.02 112.74C153 112.74 152.98 112.72 152.96 112.72H152.93H152.91H152.24V112.71Z"
                                        fill="#DA0081"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M152.63 116.1L151.33 115.91C151.15 115.88 150.98 116 150.96 116.17L150.87 116.77L150.85 116.92V117L150.83 117.04V117.13C150.8 117.23 150.77 117.32 150.75 117.42C150.39 118.96 149.92 120.48 149.24 121.91C146.6 127.66 141.42 132.26 135.29 133.95C129.2 135.72 122.37 134.73 117.06 131.24C111.71 127.81 108.04 121.95 107.21 115.66C106.79 112.52 107.03 109.29 107.94 106.25C108.84 103.21 110.46 100.4 112.56 98.03C116.75 93.27 123.04 90.4 129.41 90.56C135.77 90.57 142.01 93.57 146.07 98.45C147.07 99.68 147.99 100.98 148.72 102.39C148.82 102.56 148.91 102.74 148.99 102.92L149.04 103.03L149.07 103.1L149.13 103.24L149.39 103.79C149.46 103.95 149.66 104.02 149.83 103.95L151.04 103.44C151.21 103.37 151.28 103.17 151.2 103L150.92 102.4L150.85 102.25L150.81 102.17L150.75 102.05C150.66 101.85 150.57 101.66 150.46 101.47C149.66 99.94 148.67 98.52 147.58 97.18C143.16 91.87 136.36 88.61 129.43 88.59C122.5 88.43 115.64 91.55 111.08 96.73C108.8 99.31 107.03 102.37 106.05 105.69C105.06 109 104.79 112.51 105.25 115.93C106.15 122.78 110.15 129.17 115.98 132.9C121.77 136.7 129.2 137.78 135.84 135.85C142.52 134 148.16 129.01 151.04 122.74C151.78 121.18 152.29 119.52 152.69 117.84C152.72 117.74 152.75 117.63 152.77 117.53L152.79 117.43V117.39L152.81 117.31L152.84 117.15L152.94 116.49C152.97 116.3 152.85 116.13 152.67 116.1H152.63Z"
                                        fill="#DA0081"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M128.272 127.184V123.392H132.128V127.184H128.272ZM128.272 101.584V97.792H132.128V101.584H128.272ZM130.288 124.48C128.667 124.48 127.216 124.181 125.936 123.584C124.656 122.987 123.605 122.144 122.784 121.056C121.973 119.968 121.456 118.677 121.232 117.184L125.04 116.576C125.339 117.888 125.979 118.933 126.96 119.712C127.952 120.48 129.136 120.864 130.512 120.864C131.835 120.864 132.923 120.555 133.776 119.936C134.629 119.307 135.056 118.512 135.056 117.552C135.056 116.88 134.853 116.336 134.448 115.92C134.043 115.493 133.392 115.141 132.496 114.864L126.944 113.136C123.712 112.133 122.096 110.171 122.096 107.248C122.096 105.883 122.421 104.693 123.072 103.68C123.733 102.656 124.661 101.872 125.856 101.328C127.051 100.773 128.459 100.501 130.08 100.512C131.584 100.523 132.923 100.795 134.096 101.328C135.28 101.861 136.261 102.629 137.04 103.632C137.829 104.635 138.389 105.84 138.72 107.248L134.768 107.968C134.619 107.211 134.325 106.544 133.888 105.968C133.451 105.392 132.901 104.944 132.24 104.624C131.579 104.304 130.843 104.133 130.032 104.112C129.253 104.101 128.555 104.224 127.936 104.48C127.317 104.725 126.827 105.077 126.464 105.536C126.101 105.984 125.92 106.491 125.92 107.056C125.92 107.685 126.171 108.224 126.672 108.672C127.184 109.12 127.989 109.504 129.088 109.824L133.232 111.024C135.227 111.6 136.661 112.384 137.536 113.376C138.421 114.357 138.864 115.664 138.864 117.296C138.864 118.725 138.507 119.979 137.792 121.056C137.077 122.133 136.075 122.976 134.784 123.584C133.493 124.181 131.995 124.48 130.288 124.48Z"
                                        fill="#DA0081"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M115.13 141.55V139.94H49.87C49.8 140.47 49.76 141 49.76 141.55C49.76 148.43 55.33 154 62.21 154H127.58C120.7 154 115.13 148.43 115.13 141.55Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M115.68 45.29L141.71 71.32L115.61 71.39L115.68 45.29Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M150.45 49.41L151.17 50.51C151.27 50.66 151.23 50.87 151.07 50.97L150.37 51.43L143.45 55.95L142.69 56.45C142.54 56.55 142.33 56.51 142.24 56.35L141.52 55.25C141.42 55.1 141.46 54.89 141.62 54.8L142.38 54.3L149.3 49.78L150 49.32C150.15 49.22 150.36 49.26 150.46 49.42L150.45 49.41Z"
                                        fill="#2B0D2B"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M142.878 48.7936L143.983 48.0716C144.134 47.9731 144.341 48.0166 144.44 48.1673L145.288 49.4649C145.386 49.6156 145.342 49.8232 145.192 49.9216L144.095 50.6382C143.944 50.7366 143.737 50.6931 143.638 50.5424L142.791 49.2449C142.692 49.0942 142.736 48.8865 142.886 48.7881L142.878 48.7936Z"
                                        fill="#2B0D2B"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M145.79 50.83L144.69 51.55C144.54 51.65 144.5 51.85 144.59 52.01L145.1 52.79L147.76 56.86L148.26 57.62C148.36 57.77 148.56 57.81 148.72 57.72L149.82 57C149.97 56.9 150.01 56.7 149.92 56.55L149.42 55.79L146.76 51.72L146.25 50.94C146.15 50.79 145.95 50.75 145.8 50.84L145.79 50.83Z"
                                        fill="#2B0D2B"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M108.3 161.5C106.89 166.31 109.64 171.35 114.45 172.77C109.64 171.36 104.6 174.11 103.18 178.92C104.59 174.11 101.84 169.07 97.03 167.65C101.84 169.06 106.88 166.31 108.3 161.5Z"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M40.42 126.18C37.95 127.83 37.29 131.18 38.94 133.65C37.29 131.18 33.94 130.52 31.47 132.17C33.94 130.52 34.6 127.17 32.95 124.7C34.6 127.17 37.95 127.83 40.42 126.18Z"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Cuenta de Ahorros
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Usa tu Nequi sin límites y pásate a una cuenta
                                  de ahorros.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/mi-nequi/cuentas-nequi/deposito-bajo-monto"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 91 91"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M46.0477 21.7487H59.4688C61.4524 21.7487 63.0617 23.358 63.0617 25.3416V80.7625C63.0617 82.7461 61.4524 84.3555 59.4688 84.3555H46.0477C36.6612 84.3555 29.0337 76.7355 29.0337 67.3414V38.7552C29.0337 29.3687 36.6537 21.7412 46.0477 21.7412V21.7487Z"
                                        fill="#EBE6F4"
                                        stroke="#200020"
                                        strokeMiterlimit="10"
                                        strokeWidth="1.49705"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M26.2344 45.8138V25.4165C26.2344 23.388 27.8811 21.7412 29.9096 21.7412H56.5871C58.6156 21.7412 60.2624 23.388 60.2624 25.4165V80.6802C60.2624 82.7087 58.6156 84.3555 56.5871 84.3555H29.9096C27.8811 84.3555 26.2344 82.7087 26.2344 80.6802V50.7316"
                                        fill="white"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M26.2344 45.8138V25.4165C26.2344 23.388 27.8811 21.7412 29.9096 21.7412H56.5871C58.6156 21.7412 60.2624 23.388 60.2624 25.4165V80.6802C60.2624 82.7087 58.6156 84.3555 56.5871 84.3555H29.9096C27.8811 84.3555 26.2344 82.7087 26.2344 80.6802V50.7316"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.49705"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M48.1361 25.1772H37.7166C37.3322 25.1772 37.0205 25.4889 37.0205 25.8734V25.8809C37.0205 26.2653 37.3322 26.577 37.7166 26.577H48.1361C48.5206 26.577 48.8323 26.2653 48.8323 25.8809V25.8734C48.8323 25.4889 48.5206 25.1772 48.1361 25.1772Z"
                                        fill="white"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.49705"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <rect
                                        height="47.9057"
                                        width="26.947"
                                        fill="url(#pattern0)"
                                        x="30.1865"
                                        y="29.3091"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M26.7658 47.1313H25.6954C25.5176 47.1313 25.3735 47.2755 25.3735 47.4532V48.0969C25.3735 48.2747 25.5176 48.4188 25.6954 48.4188H26.7658C26.9436 48.4188 27.0877 48.2747 27.0877 48.0969V47.4532C27.0877 47.2755 26.9436 47.1313 26.7658 47.1313Z"
                                        fill="#200020"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M69.5892 68.6445L68.7359 68.158C68.6161 68.0906 68.5787 67.9409 68.6461 67.8211L68.953 67.2747L71.0413 63.5994L71.3782 63.0081C71.4456 62.8883 71.5953 62.8509 71.715 62.9183L72.5683 63.4048C72.6881 63.4722 72.7255 63.6219 72.6582 63.7417L72.3213 64.333L70.2329 68.0083L69.926 68.5547C69.8587 68.6744 69.709 68.7119 69.5892 68.6445Z"
                                        fill="#2B0D2B"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M72.0828 66.0319L71.5976 66.884C71.5301 67.0025 71.5714 67.1534 71.69 67.2209L72.6982 67.795C72.8167 67.8625 72.9676 67.8211 73.0351 67.7026L73.5203 66.8505C73.5878 66.732 73.5465 66.5811 73.4279 66.5136L72.4197 65.9395C72.3012 65.872 72.1503 65.9133 72.0828 66.0319Z"
                                        fill="#2B0D2B"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M70.8766 66.4736L71.3631 65.6203C71.4305 65.5005 71.3856 65.3508 71.2733 65.2834L70.667 64.9391L69.2074 64.1082L68.616 63.7714C68.4963 63.704 68.3465 63.7489 68.2792 63.8612L67.7926 64.7145C67.7253 64.8343 67.7702 64.984 67.8825 65.0514L68.4738 65.3882L69.9334 66.2191L70.5397 66.5634C70.6595 66.6308 70.8092 66.5933 70.8766 66.4736Z"
                                        fill="#2B0D2B"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M16.3238 44.5789C15.7924 41.8019 13.1126 39.9755 10.3281 40.5069C13.1052 39.9755 14.9316 37.2957 14.4001 34.5112C14.9316 37.2883 17.6113 39.1147 20.3958 38.5832C17.6188 39.1147 15.7924 41.7944 16.3238 44.5789Z"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.49705"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M70.6744 24.406C71.4828 22.9464 70.9588 21.0975 69.4917 20.2891L69.5067 20.2667C70.9663 21.0751 72.8152 20.5511 73.6236 19.084C72.8152 20.5436 73.3391 22.3925 74.8062 23.2009L74.7913 23.2233C73.3316 22.4149 71.4828 22.9389 70.6744 24.406Z"
                                        stroke="#D90080"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.49705"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M64.9481 36.8691C73.2988 36.8691 80.0684 30.0996 80.0684 21.7489C80.0684 13.3982 73.2988 6.62866 64.9481 6.62866C56.5974 6.62866 49.8279 13.3982 49.8279 21.7489C49.8279 30.0996 56.5974 36.8691 64.9481 36.8691Z"
                                        fill="white"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.49705"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M70.8689 18.6873L73.2492 15.8953"
                                        stroke="#DA0081"
                                        strokeLinejoin="round"
                                        strokeWidth="1.49705"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M59.0349 24.5933L61.797 29.3165L69.0128 20.8582"
                                        fill="white"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M59.0349 24.5933L61.797 29.3165L69.0128 20.8582"
                                        stroke="#DA0081"
                                        strokeLinejoin="round"
                                        strokeWidth="1.49705"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <defs style={{ boxSizing: 'border-box' }}>
                                        <pattern
                                          id="pattern0"
                                          height="1"
                                          width="1"
                                          patternContentUnits="objectBoundingBox"
                                          style={{ boxSizing: 'border-box' }}
                                        >
                                          <use
                                            transform="scale(0.00277778 0.0015625)"
                                            xlinkHref="#image0_2059_10806"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                        </pattern>
                                        <image
                                          id="image0_2059_10806"
                                          height="640"
                                          width="360"
                                          xlinkHref="data:image/png;base64,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"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Depósito de Bajo Monto
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Descubre el tipo de Monto que tienes al crear
                                  tu Nequi.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/pasarme-a-nequi"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="1.5rem"
                                      width="1.5rem"
                                      fill="none"
                                      viewBox="0 0 40 32"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M6.38431 0.512512H1.1289C0.516081 0.512512 0.0192871 1.00663 0.0192871 1.61615V6.05496C0.0192871 6.66448 0.516081 7.1586 1.1289 7.1586H6.38431C6.99713 7.1586 7.49392 6.66448 7.49392 6.05496V1.61615C7.49392 1.00663 6.99713 0.512512 6.38431 0.512512Z"
                                        fill="#D40080"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M38.4777 0.512676H33.9417C33.3198 0.512676 32.8321 1.00992 32.8321 1.61632V19.6262C32.8321 19.9901 32.3443 20.1235 32.1736 19.796L21.6384 0.997793C21.4677 0.694595 21.1507 0.512676 20.7849 0.512676H13.2493C12.6274 0.512676 12.1396 1.00992 12.1396 1.61632V30.3837C12.1396 31.0022 12.6396 31.4873 13.2493 31.4873H17.7852C18.4071 31.4873 18.8949 30.9901 18.8949 30.3837V11.8401C18.8949 11.4763 19.3826 11.3429 19.5533 11.6703L30.3812 31.0265C30.5519 31.3297 30.8689 31.5116 31.2347 31.5116H38.4411C39.0629 31.5116 39.5385 31.0143 39.5385 30.4079V1.60419C39.5385 0.985665 39.0386 0.500549 38.4411 0.500549H38.4777V0.512676Z"
                                        fill="#200020"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  De A la Mano a Nequi
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Descubre aquí todo lo que necesitas saber de
                                  esta unión y pásate a Nequi.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/mi-nequi/nequi-nomina"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 80 80"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M63.3301 24.8301H16.6601C13.7164 24.8301 11.3301 27.2164 11.3301 30.1601V49.8401C11.3301 52.7838 13.7164 55.1701 16.6601 55.1701H63.3301C66.2738 55.1701 68.6601 52.7838 68.6601 49.8401V30.1601C68.6601 27.2164 66.2738 24.8301 63.3301 24.8301Z"
                                        fill="#ECE7F5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M45.6898 55.1699H43.5098"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M40.0001 55.1701H13.5601C12.3301 55.1701 11.3301 54.1701 11.3301 52.9401V27.0601C11.3301 25.8301 12.3301 24.8301 13.5601 24.8301H66.4401C67.6701 24.8301 68.6701 25.8301 68.6701 27.0601V52.9401C68.6701 54.1701 67.6701 55.1701 66.4401 55.1701H49.4001"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M40.0004 51.0999C46.1308 51.0999 51.1004 46.1303 51.1004 39.9999C51.1004 33.8695 46.1308 28.8999 40.0004 28.8999C33.87 28.8999 28.9004 33.8695 28.9004 39.9999C28.9004 46.1303 33.87 51.0999 40.0004 51.0999Z"
                                        fill="white"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M39.8802 45.3999C39.0402 45.3999 38.3002 45.2399 37.6402 44.9399C36.9802 44.6399 36.4502 44.1899 36.0302 43.6199C35.6102 43.0499 35.3502 42.3799 35.2402 41.5999L37.4202 41.2599C37.5702 41.8999 37.8702 42.3999 38.3402 42.7799C38.8102 43.1599 39.3602 43.3499 40.0102 43.3499C40.6202 43.3499 41.1202 43.2099 41.5202 42.9199C41.9202 42.6299 42.1202 42.2799 42.1202 41.8599C42.1202 41.5699 42.0302 41.3399 41.8602 41.1499C41.6902 40.9599 41.4102 40.8099 41.0402 40.6899L38.1602 39.7999C36.5002 39.2899 35.6702 38.2799 35.6702 36.7599C35.6702 36.0499 35.8402 35.4299 36.1802 34.9099C36.5202 34.3899 36.9902 33.9899 37.6102 33.6999C38.2302 33.4199 38.9602 33.2799 39.8002 33.2799C40.5702 33.2899 41.2502 33.4299 41.8502 33.6999C42.4502 33.9699 42.9502 34.3499 43.3502 34.8599C43.7502 35.3699 44.0402 35.9799 44.2302 36.6999L41.9702 37.0999C41.8902 36.7599 41.7502 36.4499 41.5502 36.1899C41.3502 35.9299 41.0902 35.7199 40.7902 35.5799C40.4902 35.4399 40.1502 35.3499 39.7802 35.3399C39.4202 35.3299 39.1002 35.3799 38.8102 35.4899C38.5202 35.5999 38.2902 35.7599 38.1202 35.9599C37.9502 36.1599 37.8702 36.3899 37.8702 36.6399C37.8702 36.9199 37.9902 37.1599 38.2302 37.3599C38.4702 37.5599 38.8402 37.7399 39.3602 37.8799L41.4102 38.4599C42.4402 38.7599 43.1802 39.1599 43.6402 39.6599C44.0902 40.1699 44.3202 40.8399 44.3202 41.6699C44.3202 42.3999 44.1302 43.0499 43.7602 43.5999C43.3902 44.1499 42.8702 44.5899 42.2002 44.8999C41.5302 45.2099 40.7602 45.3699 39.8902 45.3699L39.8802 45.3999ZM38.7602 33.8599V31.9199H40.9602V33.8599H38.7602ZM38.7602 46.7699V44.8299H40.9602V46.7699H38.7602Z"
                                        fill="#DA0081"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M17.4891 25.1699C17.4891 28.4099 14.8591 31.0399 11.6191 31.0399"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M17.4891 25.1699C17.4891 28.4099 14.8591 31.0399 11.6191 31.0399"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M68.6708 31.0302C65.4308 31.0302 62.8008 28.4002 62.8008 25.1602"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M62.8008 55.1698C62.8008 51.9298 65.4308 49.2998 68.6708 49.2998"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M11.6309 49.2998C14.8709 49.2998 17.5009 51.9298 17.5009 55.1698"
                                        stroke="#200020"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Nómina
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Recibe y maneja tu sueldo en Nequi.
                                </div>
                              </div>
                            </a>
                            <h4
                              className="uui-navbar03_heading"
                              style={{
                                boxSizing: 'border-box',
                                lineHeight: '1.1em',
                                color: '#da0081',
                                letterSpacing: 'normal',
                                marginTop: '0px',
                                marginBottom: '0.25rem',
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              Inversiones
                            </h4>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/inversiones/invertir-con-trii-y-nequi"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      preserveAspectRatio="xMidYMid meet"
                                      version="1.0"
                                      viewBox="0 0 30 30.000001"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      zoomAndPan={2}
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M 15.050781 14.171875 L 12.371094 14.171875 L 12.371094 17.226562 C 12.371094 18.175781 12.867188 18.539062 13.484375 18.539062 C 14.101562 18.539062 14.476562 18.328125 14.894531 18.0625 L 15.5 19.289062 C 14.871094 19.730469 14.121094 19.972656 13.351562 19.980469 C 11.765625 19.980469 10.828125 19.121094 10.828125 17.257812 L 10.828125 14.171875 L 9.429688 14.171875 L 9.429688 12.785156 L 10.828125 12.785156 L 10.828125 10.65625 L 12.371094 10.65625 L 12.371094 12.785156 L 15.050781 12.785156 Z M 15.050781 14.171875 "
                                        fill="#000000"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M 21.273438 12.796875 L 20.910156 14.316406 C 20.546875 14.148438 20.152344 14.0625 19.753906 14.0625 C 18.773438 14.0625 18.078125 14.746094 18.078125 15.9375 L 18.078125 19.792969 L 16.558594 19.792969 L 16.558594 12.785156 L 18.066406 12.785156 L 18.066406 13.578125 C 18.53125 12.90625 19.246094 12.597656 20.105469 12.597656 C 20.503906 12.589844 20.902344 12.65625 21.273438 12.796875 Z M 21.273438 12.796875 "
                                        fill="#000000"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M 24.316406 10.359375 C 24.289062 10.625 24.164062 10.875 23.964844 11.050781 C 23.765625 11.230469 23.507812 11.332031 23.242188 11.332031 C 22.972656 11.332031 22.714844 11.230469 22.519531 11.050781 C 22.320312 10.875 22.195312 10.625 22.167969 10.359375 C 22.152344 10.210938 22.167969 10.058594 22.214844 9.914062 C 22.261719 9.769531 22.339844 9.640625 22.441406 9.527344 C 22.542969 9.414062 22.664062 9.324219 22.804688 9.265625 C 22.941406 9.203125 23.089844 9.171875 23.242188 9.171875 C 23.394531 9.171875 23.542969 9.203125 23.679688 9.265625 C 23.816406 9.324219 23.941406 9.414062 24.042969 9.527344 C 24.144531 9.640625 24.21875 9.769531 24.269531 9.914062 C 24.316406 10.058594 24.332031 10.210938 24.316406 10.359375 Z M 24.007812 19.792969 L 22.476562 19.792969 L 22.476562 12.785156 L 24.007812 12.785156 Z M 24.007812 19.792969 "
                                        fill="#000000"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M 27.886719 10.359375 C 27.859375 10.625 27.734375 10.875 27.535156 11.050781 C 27.335938 11.230469 27.078125 11.332031 26.8125 11.332031 C 26.542969 11.332031 26.285156 11.230469 26.085938 11.050781 C 25.890625 10.875 25.765625 10.625 25.738281 10.359375 C 25.722656 10.210938 25.738281 10.058594 25.785156 9.914062 C 25.832031 9.769531 25.910156 9.640625 26.011719 9.527344 C 26.113281 9.414062 26.234375 9.324219 26.375 9.265625 C 26.511719 9.203125 26.660156 9.171875 26.8125 9.171875 C 26.960938 9.171875 27.113281 9.203125 27.25 9.265625 C 27.386719 9.324219 27.511719 9.414062 27.613281 9.527344 C 27.714844 9.640625 27.789062 9.769531 27.835938 9.914062 C 27.886719 10.058594 27.902344 10.210938 27.886719 10.359375 Z M 27.578125 19.792969 L 26.046875 19.792969 L 26.046875 12.785156 L 27.578125 12.785156 Z M 27.578125 19.792969 "
                                        fill="#000000"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M 7.6875 16.046875 C 7.136719 16.046875 6.605469 15.847656 6.191406 15.488281 C 5.773438 15.128906 5.5 14.628906 5.417969 14.085938 C 5.882812 14.542969 6.507812 14.792969 7.160156 14.792969 L 7.535156 14.792969 L 7.535156 14.042969 L 7.160156 14.042969 C 6.742188 14.042969 6.335938 13.898438 6.015625 13.625 C 5.695312 13.355469 5.484375 12.976562 5.417969 12.566406 C 5.761719 12.828125 6.183594 12.972656 6.621094 12.972656 L 6.996094 12.972656 L 6.996094 12.222656 L 6.621094 12.222656 C 6.296875 12.222656 5.984375 12.09375 5.753906 11.863281 C 5.527344 11.636719 5.398438 11.324219 5.398438 11 L 5.398438 10.625 L 4.648438 10.625 L 4.648438 11 C 4.644531 11.324219 4.511719 11.636719 4.28125 11.867188 C 4.050781 12.09375 3.738281 12.222656 3.414062 12.222656 L 3.039062 12.222656 L 3.039062 12.972656 L 3.414062 12.972656 C 3.847656 12.972656 4.269531 12.828125 4.613281 12.566406 C 4.546875 12.976562 4.335938 13.355469 4.015625 13.625 C 3.699219 13.898438 3.292969 14.042969 2.875 14.042969 L 2.511719 14.042969 L 2.511719 14.792969 L 2.875 14.792969 C 3.523438 14.792969 4.148438 14.542969 4.613281 14.085938 C 4.535156 14.632812 4.261719 15.128906 3.84375 15.488281 C 3.429688 15.851562 2.894531 16.046875 2.34375 16.046875 L 1.96875 16.046875 L 1.96875 16.796875 L 2.34375 16.796875 C 2.78125 16.796875 3.210938 16.703125 3.609375 16.523438 C 4.007812 16.339844 4.359375 16.078125 4.648438 15.75 L 4.648438 19.960938 L 5.398438 19.960938 L 5.398438 15.75 C 5.679688 16.078125 6.035156 16.34375 6.429688 16.523438 C 6.824219 16.703125 7.253906 16.796875 7.6875 16.796875 L 8.0625 16.796875 L 8.0625 16.046875 Z M 7.6875 16.046875 "
                                        fill="#000000"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_text-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    gap: '0px 0.5rem',
                                    alignItems: 'center',
                                    marginBottom: '0.25rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading margin-bottom-0"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                      marginBottom: '0px',
                                    }}
                                  >
                                    trii
                                  </div>
                                  <div
                                    className="uui-badge-small-success"
                                    style={{
                                      boxSizing: 'border-box',
                                      whiteSpace: 'nowrap',
                                      borderRadius: '10rem',
                                      padding: '0.125rem 0.5rem',
                                      columnGap: '0.25rem',
                                      backgroundColor: '#ecfdf3',
                                      color: '#027a48',
                                      mixBlendMode: 'multiply',
                                      alignItems: 'center',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.75rem',
                                      fontWeight: 500,
                                      display: 'flex',
                                    }}
                                  >
                                    <div style={{ boxSizing: 'border-box' }}>
                                      Nuevo
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Invierte en acciones con trii y Nequi.
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="uui-navbar03_dropdown-link-list"
                            style={{
                              boxSizing: 'border-box',
                              gap: '0.1rem 0px',
                              gridTemplate:
                                '"." min-content "." max-content "." min-content "Area" "." "." "." / 1fr',
                              gridAutoColumns: '1fr',
                              display: 'grid',
                              gridTemplateRows:
                                'min-content max-content min-content auto auto auto auto',
                            }}
                          >
                            <h4
                              className="uui-navbar03_heading"
                              style={{
                                boxSizing: 'border-box',
                                lineHeight: '1.1em',
                                color: '#da0081',
                                letterSpacing: 'normal',
                                marginTop: '0px',
                                marginBottom: '0.25rem',
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              Plata del extranjero
                            </h4>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/moneda-extranjera/remesas"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M44 24C44 28.402 42.5778 32.4719 40.1679 35.7752C39.6735 36.4529 39.1375 37.0983 38.5637 37.7077C34.9162 41.5815 29.7406 44 24 44C12.9543 44 4 35.0457 4 24C4 23.5603 4.01419 23.124 4.04213 22.6914C4.09246 21.9121 4.18743 21.1449 4.3245 20.3924C5.94748 11.4831 13.4731 4.63287 22.7015 4.04148C23.1308 4.01397 23.5638 4 24 4C24.2187 4 24.4366 4.00351 24.6536 4.01048C28.2693 4.12657 31.6427 5.20239 34.5272 6.99153C34.9891 7.27803 35.4385 7.58281 35.8743 7.90487C37.0735 8.79109 38.1702 9.80814 39.1432 10.9349C39.5188 11.3699 39.876 11.8212 40.2135 12.2876C42.5958 15.5797 44 19.6258 44 24Z"
                                        fill="#ECE7F5"
                                        stroke="#200020"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        clipRule="evenodd"
                                        d="M17.0457 38.767L17.017 39.2255C16.9129 40.8911 18.0965 42.361 19.7459 42.6148C20.6501 42.7539 21.5709 42.5025 22.279 41.9232L23.9592 40.5484C24.5124 40.0958 24.8332 39.4189 24.8332 38.7041C24.8332 37.947 25.193 37.2349 25.8026 36.7858L30.0222 33.6765C30.7146 33.1664 31.0304 32.2887 30.8218 31.4544C30.6249 30.6667 29.9955 30.0605 29.201 29.8932L25.0162 29.0122C24.4563 28.8944 23.9282 28.6577 23.4675 28.3183L19.2164 25.1859C18.3737 24.565 17.2463 24.4928 16.3313 25.0011C15.4183 25.5083 14.2935 25.4376 13.4512 24.8199L10.8935 22.9442C10.2048 22.4392 9.69577 21.7269 9.44102 20.9117L8.37424 17.498C8.24654 17.0894 8.35621 16.6437 8.65892 16.341C9.22711 15.7728 10.1879 15.947 10.5204 16.6785L11.1581 18.0814C11.3372 18.4756 11.8269 18.6154 12.1871 18.3752C12.3825 18.2449 12.4999 18.0256 12.4999 17.7908V16.1862C12.4999 15.0709 13.404 14.1667 14.5194 14.1667C14.9403 14.1667 15.3507 14.0352 15.6932 13.7905L19.1703 11.3069C19.552 11.0342 19.6787 10.5243 19.4689 10.1047C19.2878 9.74251 19.3553 9.30541 19.6372 9.01469L23.9548 4.56214C24.1076 4.40463 24.1997 4.20712 24.2278 4.00127C24.1519 4.00042 24.076 4 23.9999 4C14.0207 4 5.74856 11.3087 4.2442 20.8652C4.21919 21.0241 4.19605 21.1836 4.1748 21.3436L4.45853 21.6983C4.70692 22.0088 5.00022 22.2806 5.32876 22.5046L10.4199 25.9758C11.5127 26.7209 12.1665 27.958 12.1665 29.2807V30.9109C12.1665 32.126 12.7189 33.2753 13.6678 34.0343L15.6537 35.6231C16.602 36.3818 17.1214 37.5549 17.0457 38.767ZM30.6897 5.14622L29.2323 8.1822C29.0824 8.49431 29.0522 8.85053 29.1473 9.18343C29.4067 10.0913 30.4654 10.4953 31.2637 9.99118L35.2591 7.46791C33.8541 6.5092 32.3206 5.72491 30.6897 5.14622ZM39.7307 11.6478C39.7107 11.6513 39.6908 11.6549 39.6708 11.6588L34.6078 12.6283C33.3841 12.8626 32.3395 13.6537 31.7823 14.768L31.6483 15.0361C31.0367 16.2593 31.0917 17.7104 31.8177 18.8694C32.4227 19.8353 33.0712 20.8529 33.5963 21.6722C34.238 22.6734 34.6588 23.3294 35.8234 23.0883C37.5777 22.7251 39.894 23.9895 39.7799 25.7773L39.1028 36.3878C39.0893 36.599 39.1405 36.7932 39.2364 36.9564C42.2071 33.4662 43.9999 28.9425 43.9999 24C43.9999 19.338 42.4049 15.0486 39.7307 11.6478Z"
                                        fill="white"
                                        fillRule="evenodd"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M17.017 39.2255L16.2685 39.1787V39.1787L17.017 39.2255ZM17.0457 38.767L17.7942 38.8138V38.8138L17.0457 38.767ZM19.7459 42.6148L19.8599 41.8735L19.7459 42.6148ZM22.279 41.9232L22.7539 42.5037L22.279 41.9232ZM23.9592 40.5484L23.4843 39.968L23.9592 40.5484ZM25.8026 36.7858L26.2475 37.3895V37.3895L25.8026 36.7858ZM30.0222 33.6765L29.5774 33.0727L30.0222 33.6765ZM30.8218 31.4544L31.5494 31.2725V31.2725L30.8218 31.4544ZM29.201 29.8932L29.3555 29.1593L29.201 29.8932ZM25.0162 29.0122L25.1707 28.2783L25.1707 28.2783L25.0162 29.0122ZM23.4675 28.3183L23.0226 28.9221H23.0226L23.4675 28.3183ZM19.2164 25.1859L19.6613 24.5821L19.2164 25.1859ZM16.3313 25.0011L16.6956 25.6567L16.6956 25.6567L16.3313 25.0011ZM13.4512 24.8199L13.0077 25.4247L13.4512 24.8199ZM10.8935 22.9442L10.45 23.549H10.45L10.8935 22.9442ZM9.44102 20.9117L10.1569 20.688L10.1569 20.688L9.44102 20.9117ZM8.37424 17.498L7.65837 17.7217L7.65838 17.7217L8.37424 17.498ZM8.65892 16.341L8.12859 15.8106H8.12859L8.65892 16.341ZM10.5204 16.6785L9.83762 16.9889V16.9889L10.5204 16.6785ZM11.1581 18.0814L10.4753 18.3918L10.4753 18.3918L11.1581 18.0814ZM12.1871 18.3752L11.7711 17.7512L11.7711 17.7512L12.1871 18.3752ZM15.6932 13.7905L15.2572 13.1802H15.2572L15.6932 13.7905ZM19.1703 11.3069L19.6062 11.9172L19.6062 11.9172L19.1703 11.3069ZM19.4689 10.1047L20.1397 9.76932V9.76932L19.4689 10.1047ZM19.6372 9.01469L20.1756 9.5368L20.1756 9.5368L19.6372 9.01469ZM23.9548 4.56214L23.4164 4.04002L23.4164 4.04002L23.9548 4.56214ZM24.2278 4.00127L24.9709 4.10266L25.0857 3.2608L24.2361 3.25132L24.2278 4.00127ZM4.2442 20.8652L3.50332 20.7486H3.50332L4.2442 20.8652ZM4.1748 21.3436L3.43132 21.245L3.38922 21.5622L3.58913 21.8121L4.1748 21.3436ZM4.45853 21.6983L3.87286 22.1668L3.87286 22.1668L4.45853 21.6983ZM5.32876 22.5046L4.90626 23.1243H4.90626L5.32876 22.5046ZM10.4199 25.9758L9.99738 26.5955H9.99738L10.4199 25.9758ZM13.6678 34.0343L13.1992 34.62H13.1992L13.6678 34.0343ZM15.6537 35.6231L15.1851 36.2087L15.6537 35.6231ZM30.6897 5.14622L30.9405 4.4394L30.3053 4.214L30.0136 4.82164L30.6897 5.14622ZM29.2323 8.1822L29.9084 8.50678V8.50678L29.2323 8.1822ZM29.1473 9.18343L29.8685 8.97739V8.97739L29.1473 9.18343ZM31.2637 9.99118L30.8632 9.35706L31.2637 9.99118ZM35.2591 7.46791L35.6595 8.10204L36.6252 7.49216L35.6818 6.8484L35.2591 7.46791ZM39.6708 11.6588L39.5298 10.9221L39.5298 10.9222L39.6708 11.6588ZM39.7307 11.6478L40.3203 11.1842L40.0429 10.8314L39.6009 10.9091L39.7307 11.6478ZM34.6078 12.6283L34.7488 13.3649L34.6078 12.6283ZM31.7823 14.768L32.4531 15.1035L32.4531 15.1034L31.7823 14.768ZM31.6483 15.0361L30.9775 14.7006L30.9775 14.7006L31.6483 15.0361ZM31.8177 18.8694L32.4533 18.4712L32.4533 18.4712L31.8177 18.8694ZM33.5963 21.6722L32.9649 22.0769L33.5963 21.6722ZM35.8234 23.0883L35.9754 23.8227L35.8234 23.0883ZM39.7799 25.7773L40.5284 25.8251L39.7799 25.7773ZM39.1028 36.3878L38.3543 36.34L39.1028 36.3878ZM39.2364 36.9564L38.5898 37.3364L39.1241 38.2454L39.8075 37.4425L39.2364 36.9564ZM17.7656 39.2723L17.7942 38.8138L16.2971 38.7202L16.2685 39.1787L17.7656 39.2723ZM19.8599 41.8735C18.594 41.6788 17.6857 40.5506 17.7656 39.2723L16.2685 39.1787C16.1402 41.2315 17.5989 43.0433 19.6319 43.3561L19.8599 41.8735ZM21.8041 41.3427C21.2606 41.7873 20.5539 41.9803 19.8599 41.8735L19.6319 43.3561C20.7463 43.5275 21.8812 43.2177 22.7539 42.5037L21.8041 41.3427ZM23.4843 39.968L21.8041 41.3427L22.7539 42.5037L24.4342 41.1289L23.4843 39.968ZM24.0832 38.7041C24.0832 39.1939 23.8634 39.6578 23.4843 39.968L24.4342 41.1289C25.1614 40.5339 25.5832 39.6438 25.5832 38.7041H24.0832ZM25.3577 36.182C24.5563 36.7725 24.0832 37.7087 24.0832 38.7041H25.5832C25.5832 38.1853 25.8298 37.6973 26.2475 37.3895L25.3577 36.182ZM29.5774 33.0727L25.3577 36.182L26.2475 37.3895L30.4671 34.2803L29.5774 33.0727ZM30.0942 31.6363C30.229 32.1756 30.0249 32.743 29.5774 33.0727L30.4671 34.2803C31.4043 33.5898 31.8317 32.4018 31.5494 31.2725L30.0942 31.6363ZM29.0465 30.6272C29.5601 30.7353 29.9669 31.1271 30.0942 31.6363L31.5494 31.2725C31.2828 30.2063 30.431 29.3858 29.3555 29.1593L29.0465 30.6272ZM24.8617 29.7462L29.0465 30.6272L29.3555 29.1593L25.1707 28.2783L24.8617 29.7462ZM23.0226 28.9221C23.5696 29.3252 24.1968 29.6062 24.8617 29.7462L25.1707 28.2783C24.7158 28.1826 24.2867 27.9903 23.9124 27.7145L23.0226 28.9221ZM18.7715 25.7897L23.0226 28.9221L23.9124 27.7145L19.6613 24.5821L18.7715 25.7897ZM16.6956 25.6567C17.3539 25.2909 18.1651 25.3429 18.7715 25.7897L19.6613 24.5821C18.5823 23.787 17.1387 23.6946 15.9671 24.3455L16.6956 25.6567ZM13.0077 25.4247C14.0862 26.2156 15.5264 26.3062 16.6956 25.6567L15.9671 24.3455C15.3101 24.7104 14.5008 24.6595 13.8947 24.2151L13.0077 25.4247ZM10.45 23.549L13.0077 25.4247L13.8947 24.2151L11.337 22.3394L10.45 23.549ZM8.72516 21.1354C9.02767 22.1035 9.63209 22.9493 10.45 23.549L11.337 22.3394C10.7774 21.9291 10.3639 21.3504 10.1569 20.688L8.72516 21.1354ZM7.65838 17.7217L8.72516 21.1354L10.1569 20.688L9.0901 17.2743L7.65838 17.7217ZM8.12859 15.8106C7.62861 16.3106 7.44747 17.0468 7.65837 17.7217L9.0901 17.2743C9.04562 17.132 9.08382 16.9767 9.18926 16.8713L8.12859 15.8106ZM11.2032 16.3682C10.654 15.1599 9.06705 14.8722 8.12859 15.8106L9.18925 16.8713C9.38716 16.6734 9.7218 16.7341 9.83762 16.9889L11.2032 16.3682ZM11.8409 17.7711L11.2032 16.3682L9.83762 16.9889L10.4753 18.3918L11.8409 17.7711ZM11.7711 17.7512C11.7955 17.7349 11.8287 17.7444 11.8409 17.7711L10.4753 18.3918C10.8458 19.2068 11.8582 19.4958 12.6031 18.9992L11.7711 17.7512ZM11.7499 17.7908C11.7499 17.7749 11.7578 17.76 11.7711 17.7512L12.6031 18.9992C13.0072 18.7299 13.2499 18.2764 13.2499 17.7908H11.7499ZM11.7499 16.1862V17.7908H13.2499V16.1862H11.7499ZM14.5194 13.4167C12.9898 13.4167 11.7499 14.6566 11.7499 16.1862H13.2499C13.2499 15.4851 13.8182 14.9167 14.5194 14.9167V13.4167ZM15.2572 13.1802C15.0419 13.334 14.7839 13.4167 14.5194 13.4167V14.9167C15.0966 14.9167 15.6594 14.7363 16.1291 14.4008L15.2572 13.1802ZM18.7344 10.6966L15.2572 13.1802L16.1291 14.4008L19.6062 11.9172L18.7344 10.6966ZM18.7981 10.4401C18.8428 10.5296 18.8158 10.6384 18.7344 10.6966L19.6062 11.9172C20.2883 11.43 20.5145 10.519 20.1397 9.76932L18.7981 10.4401ZM19.0988 8.49257C18.5951 9.01201 18.4745 9.79298 18.7981 10.4401L20.1397 9.76932C20.1011 9.69205 20.1155 9.59881 20.1756 9.5368L19.0988 8.49257ZM23.4164 4.04002L19.0988 8.49257L20.1756 9.5368L24.4933 5.08425L23.4164 4.04002ZM23.4846 3.89988C23.4776 3.9517 23.4547 4.00053 23.4164 4.04002L24.4933 5.08425C24.7604 4.80873 24.9218 4.46253 24.9709 4.10266L23.4846 3.89988ZM23.9999 4.75C24.0732 4.75 24.1463 4.75041 24.2194 4.75122L24.2361 3.25132C24.1575 3.25044 24.0788 3.25 23.9999 3.25V4.75ZM4.98507 20.9818C6.43293 11.7843 14.3957 4.75 23.9999 4.75V3.25C13.6458 3.25 5.0642 10.833 3.50332 20.7486L4.98507 20.9818ZM4.91829 21.4423C4.93873 21.2882 4.961 21.1347 4.98507 20.9818L3.50332 20.7486C3.47737 20.9134 3.45336 21.0789 3.43132 21.245L4.91829 21.4423ZM5.0442 21.2298L4.76047 20.8751L3.58913 21.8121L3.87286 22.1668L5.0442 21.2298ZM5.75126 21.8849C5.48433 21.7029 5.24602 21.4821 5.0442 21.2298L3.87286 22.1668C4.16782 22.5356 4.51612 22.8582 4.90626 23.1243L5.75126 21.8849ZM10.8424 25.3561L5.75126 21.8849L4.90626 23.1243L9.99738 26.5955L10.8424 25.3561ZM12.9165 29.2807C12.9165 27.71 12.1401 26.2409 10.8424 25.3561L9.99738 26.5955C10.8853 27.2009 11.4165 28.206 11.4165 29.2807H12.9165ZM12.9165 30.9109V29.2807H11.4165V30.9109H12.9165ZM14.1363 33.4487C13.3653 32.8319 12.9165 31.8982 12.9165 30.9109H11.4165C11.4165 32.3538 12.0725 33.7186 13.1992 34.62L14.1363 33.4487ZM16.1222 35.0374L14.1363 33.4487L13.1992 34.62L15.1851 36.2087L16.1222 35.0374ZM17.7942 38.8138C17.8852 37.3578 17.2613 35.9487 16.1222 35.0374L15.1851 36.2087C15.9427 36.8148 16.3577 37.7519 16.2971 38.7202L17.7942 38.8138ZM30.0136 4.82164L28.5561 7.85761L29.9084 8.50678L31.3658 5.4708L30.0136 4.82164ZM28.5561 7.85761C28.3269 8.33514 28.2807 8.88014 28.4262 9.38947L29.8685 8.97739C29.8238 8.82092 29.838 8.65349 29.9084 8.50678L28.5561 7.85761ZM28.4262 9.38947C28.823 10.7784 30.4429 11.3967 31.6642 10.6253L30.8632 9.35706C30.488 9.59403 29.9904 9.4041 29.8685 8.97739L28.4262 9.38947ZM31.6642 10.6253L35.6595 8.10204L34.8586 6.83379L30.8632 9.35706L31.6642 10.6253ZM30.4389 5.85304C32.0081 6.40985 33.4839 7.16458 34.8363 8.08743L35.6818 6.8484C34.2242 5.85381 32.633 5.03997 30.9405 4.4394L30.4389 5.85304ZM39.8118 12.3954C39.8281 12.3923 39.8443 12.3893 39.8605 12.3864L39.6009 10.9091C39.5771 10.9133 39.5534 10.9176 39.5298 10.9221L39.8118 12.3954ZM34.7488 13.3649L39.8119 12.3954L39.5298 10.9222L34.4667 11.8916L34.7488 13.3649ZM32.4531 15.1034C32.9059 14.198 33.7546 13.5553 34.7488 13.3649L34.4667 11.8916C33.0136 12.1699 31.7732 13.1093 31.1115 14.4326L32.4531 15.1034ZM32.3191 15.3715L32.4531 15.1035L31.1115 14.4326L30.9775 14.7006L32.3191 15.3715ZM32.4533 18.4712C31.8695 17.5393 31.8216 16.3665 32.3191 15.3715L30.9775 14.7006C30.2518 16.1521 30.3138 17.8815 31.1821 19.2675L32.4533 18.4712ZM34.2277 21.2675C33.7033 20.4493 33.0564 19.4341 32.4533 18.4712L31.1821 19.2675C31.789 20.2365 32.439 21.2565 32.9649 22.0769L34.2277 21.2675ZM35.6713 22.3539C35.2717 22.4366 35.1082 22.3589 34.976 22.2555C34.7671 22.092 34.5722 21.8049 34.2277 21.2675L32.9649 22.0769C33.2622 22.5408 33.5985 23.0822 34.0516 23.4368C34.5813 23.8513 35.2105 23.9811 35.9754 23.8227L35.6713 22.3539ZM40.5284 25.8251C40.6089 24.5627 39.8258 23.5738 38.9022 22.9917C37.9769 22.4086 36.7635 22.1278 35.6713 22.3539L35.9754 23.8227C36.6375 23.6857 37.4594 23.8555 38.1024 24.2607C38.7469 24.6669 39.0649 25.2041 39.0314 25.7296L40.5284 25.8251ZM39.8513 36.4355L40.5284 25.8251L39.0314 25.7296L38.3543 36.34L39.8513 36.4355ZM39.883 36.5763C39.861 36.539 39.8476 36.4933 39.8513 36.4355L38.3543 36.34C38.3311 36.7047 38.42 37.0474 38.5898 37.3364L39.883 36.5763ZM43.2499 24C43.2499 28.7577 41.5249 33.1106 38.6653 36.4702L39.8075 37.4425C42.8894 33.8218 44.7499 29.1272 44.7499 24H43.2499ZM39.1411 12.1114C41.7151 15.3848 43.2499 19.5121 43.2499 24H44.7499C44.7499 19.164 43.0947 14.7125 40.3203 11.1842L39.1411 12.1114Z"
                                        fill="#200020"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M17.1658 32V31.3471H17.893V32H17.1658ZM17.1658 27.6529V27H17.893V27.6529H17.1658ZM17.5348 31.5375C17.2585 31.5375 17.0116 31.4859 16.7941 31.3825C16.5766 31.2773 16.3993 31.1295 16.262 30.9391C16.1248 30.7468 16.0374 30.5201 16 30.259L16.7219 30.1447C16.7701 30.3587 16.8708 30.5292 17.0241 30.6561C17.1791 30.7831 17.3636 30.8466 17.5775 30.8466C17.779 30.8466 17.9456 30.7985 18.0775 30.7024C18.2112 30.6063 18.2781 30.4875 18.2781 30.346C18.2781 30.2499 18.2487 30.171 18.1898 30.1094C18.1328 30.0459 18.0428 29.9942 17.9198 29.9543L16.9679 29.6551C16.4189 29.4828 16.1444 29.1418 16.1444 28.6322C16.1444 28.3928 16.1996 28.1852 16.3102 28.0092C16.4225 27.8333 16.5802 27.6982 16.7834 27.6039C16.9884 27.5078 17.2299 27.4606 17.508 27.4625C17.7629 27.4661 17.9893 27.5132 18.1872 27.6039C18.385 27.6928 18.5499 27.8225 18.6818 27.9929C18.8155 28.1616 18.9127 28.3674 18.9733 28.6104L18.2246 28.7465C18.1996 28.6304 18.1533 28.5288 18.0856 28.4418C18.0178 28.3529 17.9332 28.284 17.8316 28.235C17.7317 28.1843 17.6203 28.1571 17.4973 28.1534C17.3797 28.1498 17.2727 28.167 17.1765 28.2051C17.082 28.2432 17.0062 28.2967 16.9492 28.3656C16.8939 28.4327 16.8663 28.5089 16.8663 28.5941C16.8663 28.6884 16.9055 28.77 16.984 28.839C17.0624 28.9061 17.1872 28.9641 17.3583 29.0131L18.0374 29.2089C18.3779 29.3087 18.623 29.4438 18.7727 29.6143C18.9242 29.7847 19 30.0105 19 30.2916C19 30.5383 18.9385 30.755 18.8155 30.9418C18.6925 31.1286 18.5205 31.2746 18.2995 31.3798C18.0802 31.4849 17.8253 31.5375 17.5348 31.5375Z"
                                        fill="#DA0081"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M4.04224 22.6914C4.08628 22.0095 4.16449 21.337 4.27517 20.6754"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M24.6535 4.01048C24.4365 4.00351 24.2186 4 23.9999 4C23.5637 4 23.1307 4.01397 22.7014 4.04148"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M29.9521 4.90063C30.4356 5.05113 30.9112 5.21948 31.3781 5.40491"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M35.8742 7.90492C35.4384 7.58286 34.989 7.27807 34.5271 6.99158"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M39.1433 10.9349C39.5189 11.3699 39.8761 11.8212 40.2136 12.2876"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M38.5637 37.7078C39.1375 37.0984 39.6735 36.453 40.1679 35.7753"
                                        stroke="#ECE7F5"
                                        strokeWidth="1.5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Remesas
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Recibe plata del exterior directo a tu Nequi.
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/moneda-extranjera/paypal"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M37.972 13.82c.107-5.565-4.485-9.837-10.799-9.837H14.115a1.278 1.278 0 0 0-1.262 1.079L7.62 37.758a1.038 1.038 0 0 0 1.025 1.2h7.737l-1.21 7.572a1.038 1.038 0 0 0 1.026 1.2H22.5c.305 0 .576-.11.807-.307.231-.198.269-.471.316-.772l1.85-10.885c.047-.3.2-.69.432-.888.231-.198.433-.306.737-.307H30.5c6.183 0 11.43-4.394 12.389-10.507.678-4.34-1.182-8.287-4.916-10.244Z"
                                        fill="#001C64"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="m18.056 26.9-1.927 12.22-1.21 7.664a1.038 1.038 0 0 0 1.026 1.2h6.67a1.278 1.278 0 0 0 1.261-1.079l1.758-11.14a1.277 1.277 0 0 1 1.261-1.078h3.927c6.183 0 11.429-4.51 12.388-10.623.68-4.339-1.504-8.286-5.238-10.244-.01.462-.05.923-.121 1.38-.959 6.112-6.206 10.623-12.389 10.623h-6.145a1.277 1.277 0 0 0-1.261 1.077Z"
                                        fill="#0070E0"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M16.128 39.12h-7.76a1.037 1.037 0 0 1-1.025-1.2l5.232-33.182a1.277 1.277 0 0 1 1.262-1.078h13.337c6.313 0 10.905 4.595 10.798 10.16-1.571-.824-3.417-1.295-5.44-1.295H21.413a1.278 1.278 0 0 0-1.261 1.078L18.057 26.9l-1.93 12.22Z"
                                        fill="#003087"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  PayPal
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Pasa tus Dólares de PayPal a Nequi ¡Acá te
                                  enseñamos cómo!
                                </div>
                              </div>
                            </a>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/moneda-extranjera/payoneer"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 44 50"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M20.5727 0.997215C20.6166 2.30692 20.5531 3.60686 20.448 4.91168C19.6002 4.99231 18.7596 5.15114 17.9386 5.37594C17.6136 4.098 17.3864 2.83227 17.2373 1.52256C18.3344 1.24401 19.4438 1.06808 20.5727 0.997215Z"
                                        fill="#F08401"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M20.5729 0.997192C21.0054 0.977644 21.4379 0.96787 21.8703 0.972757C21.7897 2.30446 21.9363 3.57995 22.1978 4.88477C21.6138 4.86278 21.0322 4.875 20.4482 4.91165C20.5533 3.60683 20.6168 2.3069 20.5729 0.997192Z"
                                        fill="#EA9A01"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M21.8705 0.972847C22.4325 0.989951 22.9921 1.02416 23.5516 1.08525C23.73 2.41695 23.8522 3.75109 23.9402 5.09256C23.3635 4.98993 22.7819 4.91907 22.1979 4.88486C21.9365 3.58004 21.7899 2.30455 21.8705 0.972847Z"
                                        fill="#E7AE01"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M23.5513 1.08504C24.3234 1.18523 25.0907 1.32451 25.8457 1.51754C25.7382 2.83947 25.6111 4.15406 25.4645 5.4711C24.9612 5.32693 24.4554 5.19254 23.9398 5.09236C23.8518 3.75089 23.7296 2.41674 23.5513 1.08504Z"
                                        fill="#E5BE02"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M17.2376 1.52258C17.3867 2.83228 17.6139 4.09801 17.9389 5.37595C16.8222 5.70093 15.7544 6.17741 14.7551 6.77362C14.6036 5.43215 14.8723 3.82189 14.2664 2.60504C15.2266 2.15544 16.2163 1.7938 17.2376 1.52258Z"
                                        fill="#F66800"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M25.846 1.51775C26.8185 1.77188 27.7617 2.12374 28.678 2.53424C27.9523 3.63381 27.3072 4.78469 26.5571 5.8696C26.1979 5.72543 25.8338 5.5886 25.4648 5.47131C25.6115 4.15427 25.7385 2.83968 25.846 1.51775Z"
                                        fill="#DECD04"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M28.6781 2.5342C29.4869 2.89095 30.259 3.36499 31.0018 3.83902C30 4.92149 28.8247 5.62277 27.5516 6.33138C27.2242 6.16522 26.8943 6.01128 26.5571 5.86956C27.3073 4.78465 27.9524 3.63377 28.6781 2.5342Z"
                                        fill="#D2D509"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M14.2662 2.60489C14.8722 3.82174 14.6034 5.432 14.7549 6.77347C11.8887 8.51079 9.75309 11.355 8.89543 14.5975C8.05976 17.7007 8.42139 21.0752 9.89481 23.9316C9.37191 25.3977 8.71217 26.6488 7.70056 27.8412C5.82885 25.234 4.7806 22.1283 4.52892 18.9396C4.37254 16.4961 4.86124 13.9989 5.73112 11.7191C7.29495 7.74353 10.4055 4.42773 14.2662 2.60489Z"
                                        fill="#FD4A01"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M31.0017 3.83903C31.8643 4.39859 32.6242 5.06077 33.3719 5.75961C32.3383 6.62704 31.312 7.44317 30.0927 8.04426C29.3108 7.38208 28.458 6.80786 27.5515 6.33138C28.8246 5.62277 29.9999 4.92149 31.0017 3.83903Z"
                                        fill="#BDD717"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M33.3722 5.75945C33.9855 6.33367 34.5402 6.99097 35.0582 7.65071C33.9684 8.38375 32.8884 9.11191 31.7155 9.71545C31.2219 9.11436 30.6795 8.5548 30.093 8.04411C31.3123 7.44301 32.3386 6.62689 33.3722 5.75945Z"
                                        fill="#A0D829"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M35.058 7.6507C35.4905 8.19804 35.8644 8.78692 36.2236 9.38557C35.0702 9.98422 33.956 10.666 32.8369 11.3306C32.4997 10.7686 32.1234 10.2286 31.7153 9.71544C32.8882 9.1119 33.9682 8.38374 35.058 7.6507Z"
                                        fill="#83D83B"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M36.2233 9.38556C36.5117 9.86204 36.7585 10.3581 36.9979 10.8614C35.847 11.487 34.7255 12.1662 33.5917 12.8187C33.3669 12.308 33.1128 11.8168 32.8367 11.3306C33.9558 10.6659 35.07 9.98421 36.2233 9.38556Z"
                                        fill="#66D94D"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M36.998 10.8615C37.3083 11.5163 37.56 12.203 37.7824 12.8945C36.6119 13.6104 35.5148 14.4314 34.3444 15.1449C34.1587 14.3508 33.907 13.5738 33.5918 12.8187C34.7256 12.1663 35.8471 11.487 36.998 10.8615Z"
                                        fill="#40D867"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M37.7822 12.8946C37.9728 13.5226 38.1243 14.1604 38.2587 14.8055C37.015 15.3381 35.8006 15.9368 34.5642 16.489C34.5104 16.0394 34.4346 15.5898 34.3442 15.1451C35.5147 14.4316 36.6118 13.6106 37.7822 12.8946Z"
                                        fill="#2ED977"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M38.259 14.8054C38.3812 15.4114 38.452 16.0296 38.5033 16.6454C37.201 16.8775 35.9181 17.1658 34.6378 17.4982C34.6207 17.161 34.5962 16.8238 34.5645 16.489C35.8009 15.9368 37.0153 15.3381 38.259 14.8054Z"
                                        fill="#22D787"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M38.5031 16.6453C38.5397 17.2317 38.5568 17.8181 38.547 18.4021C37.2276 18.5121 35.9227 18.6734 34.6155 18.8786C34.6399 18.4192 34.6448 17.9599 34.6375 17.498C35.9179 17.1657 37.2007 16.8774 38.5031 16.6453Z"
                                        fill="#1DCE96"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M38.547 18.4021C38.5201 19.1254 38.4614 19.8486 38.3588 20.5621C37.0345 20.3813 35.7541 20.3373 34.4199 20.4057C34.5128 19.9024 34.5739 19.3917 34.6154 18.8786C35.9227 18.6733 37.2275 18.512 38.547 18.4021Z"
                                        fill="#19C5A3"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M34.42 20.4058C35.7541 20.3374 37.0345 20.3814 38.3589 20.5622C38.2416 21.2415 38.0998 21.9135 37.919 22.5756C36.6509 22.2507 35.3802 21.977 34.0901 21.7473C34.2196 21.305 34.3295 20.8579 34.42 20.4058Z"
                                        fill="#15BCB0"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M34.0904 21.747C35.3806 21.9767 36.6512 22.2504 37.9193 22.5754C37.8069 22.9639 37.6872 23.3524 37.5504 23.7336C36.182 23.1447 34.8674 23.284 33.4355 23.4672C33.6872 22.9077 33.9071 22.3335 34.0904 21.747Z"
                                        fill="#14AFC0"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M37.5504 23.7339C37.3964 24.1444 37.2352 24.5525 37.0568 24.9532C36.4459 24.8726 35.8008 24.7431 35.1875 24.7993C34.5669 24.8921 33.9364 25.1536 33.3476 25.3637C33.1936 25.09 33.0372 24.8164 32.876 24.5451C33.0763 24.1933 33.262 23.8341 33.4355 23.4676C34.8674 23.2843 36.182 23.145 37.5504 23.7339Z"
                                        fill="#10A6CF"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M9.89493 23.9317C10.3763 24.848 10.953 25.7081 11.6249 26.4974C11.1093 27.812 10.6402 29.0679 9.64814 30.1137C8.93953 29.4076 8.28223 28.655 7.70068 27.8413C8.71229 26.6489 9.37203 25.3978 9.89493 23.9317Z"
                                        fill="#F9491B"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M32.8758 24.5449C33.0371 24.8161 33.1935 25.0898 33.3474 25.3635C33.8777 26.4142 34.447 27.1448 35.3658 27.8852C34.9992 28.3934 34.6058 28.8797 34.1929 29.3513C33.1324 28.4081 32.4727 27.2743 31.8789 26.0037C32.2357 25.5345 32.5655 25.0458 32.8758 24.5449Z"
                                        fill="#2390E1"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M35.1874 24.7991C35.8007 24.7429 36.4458 24.8724 37.0566 24.953C36.585 25.9866 36.0206 26.9591 35.3657 27.8852C34.447 27.1448 33.8776 26.4142 33.3474 25.3635C33.9363 25.1534 34.5667 24.892 35.1874 24.7991Z"
                                        fill="#099EDE"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M31.8789 26.0037C32.4726 27.2743 33.1324 28.4081 34.1929 29.3513C33.7139 29.8815 33.2008 30.38 32.6632 30.8516C31.7274 29.7838 31.3731 28.5132 30.7646 27.2646C31.1605 26.8663 31.5343 26.4436 31.8789 26.0037Z"
                                        fill="#3686E4"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M11.625 26.4972C12.143 27.091 12.7123 27.6408 13.3183 28.1417C12.7465 29.3537 12.1992 30.5754 11.6518 31.7971C10.9432 31.2865 10.2737 30.7245 9.64819 30.1136C10.6402 29.0678 11.1094 27.8118 11.625 26.4972Z"
                                        fill="#F44A33"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M30.7646 27.2646C31.373 28.5133 31.7273 29.7839 32.6632 30.8517C32.2722 31.184 31.8715 31.4992 31.4585 31.7997C30.596 30.6489 30.2686 29.3636 29.9705 27.983C30.2417 27.7509 30.5056 27.5114 30.7646 27.2646Z"
                                        fill="#477FE5"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M29.9708 27.9831C30.2689 29.3636 30.5963 30.6489 31.4588 31.7998C31.1192 32.0417 30.7722 32.2714 30.4179 32.4913C29.8657 31.2915 29.311 30.0893 28.7539 28.8896C29.1742 28.6086 29.5798 28.3056 29.9708 27.9831Z"
                                        fill="#5E78E2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M13.3183 28.1418C13.6946 28.4448 14.088 28.7258 14.4912 28.9922C14.0465 30.2457 13.6482 31.5139 13.1204 32.738C12.617 32.4448 12.1283 32.1345 11.6519 31.7973C12.1992 30.5756 12.7465 29.3538 13.3183 28.1418Z"
                                        fill="#F04B49"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M14.4909 28.992C14.9185 29.2486 15.351 29.4954 15.7957 29.725C15.1702 30.871 14.6058 32.0512 14.0095 33.2143C13.709 33.0653 13.4133 32.904 13.1201 32.7379C13.6479 31.5137 14.0462 30.2455 14.4909 28.992Z"
                                        fill="#EB4D5F"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M28.7538 28.8895C29.3109 30.0892 29.8656 31.2914 30.4178 32.4911C29.8363 32.843 29.2352 33.1607 28.6194 33.4465C27.9939 32.2981 27.4637 31.1008 26.843 29.9475C27.5052 29.6445 28.1454 29.2877 28.7538 28.8895Z"
                                        fill="#7A6FE0"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M15.796 29.7251C16.5119 30.0452 17.2352 30.3433 17.9902 30.5657C17.2401 31.6799 16.5485 32.8113 16.0452 34.0599C15.3512 33.818 14.6719 33.537 14.0098 33.2144C14.606 32.0513 15.1704 30.8711 15.796 29.7251Z"
                                        fill="#E64F81"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M26.8429 29.9474C27.4636 31.1007 27.9938 32.298 28.6193 33.4465C27.5173 33.9425 26.3664 34.3188 25.1862 34.5827C24.9199 33.2803 24.5631 32.0537 24.0989 30.8075C25.0396 30.6096 25.9486 30.2992 26.8429 29.9474Z"
                                        fill="#A363DA"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M17.9904 30.5657C18.9312 30.8149 19.8963 30.9786 20.8664 31.0568C19.999 32.1979 19.3759 33.4514 18.787 34.7489C17.856 34.5901 16.9397 34.3628 16.0454 34.0599C16.5488 32.8112 17.2403 31.6799 17.9904 30.5657Z"
                                        fill="#DF51A4"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M24.0988 30.8077C24.563 32.0539 24.9198 33.2805 25.1861 34.5829C24.0743 34.8199 22.9381 34.9494 21.7995 34.9714C21.7139 33.6544 21.5527 32.3545 21.3425 31.0521C22.2662 31.0374 23.1874 30.9837 24.0988 30.8077Z"
                                        fill="#C758C8"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M20.866 31.0571L21.3425 31.0522C21.5526 32.3546 21.7139 33.6545 21.7994 34.9715C20.7927 34.974 19.7811 34.9056 18.7866 34.7492C19.3755 33.4517 19.9986 32.1982 20.866 31.0571Z"
                                        fill="#D953BC"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M0.508546 39.9849C1.30251 39.9577 2.10191 39.9818 2.89821 39.974C3.72092 39.9685 4.58869 40.169 5.16824 40.792C5.82547 41.4858 5.86432 42.6301 5.47277 43.4637C5.1659 44.1147 4.57082 44.5498 3.89105 44.751C3.17012 44.9716 2.46627 44.8955 1.71736 44.9087C1.72125 45.6863 1.71348 46.464 1.7228 47.2416C1.31494 47.2447 0.907082 47.2447 0.5 47.2424C0.51243 44.8341 0.494562 42.3908 0.508546 39.9849Z"
                                        fill="#252526"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M1.71729 41.0601C2.38462 41.0935 3.23996 40.9466 3.84126 41.2644C4.49616 41.5868 4.6663 42.488 4.3268 43.0939C4.10306 43.4839 3.67967 43.7069 3.24928 43.7853C2.74664 43.8568 2.22458 43.8102 1.71729 43.8234C1.71884 42.902 1.71884 41.9807 1.71729 41.0601Z"
                                        fill="white"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M10.2194 42.8081C10.2109 42.5929 10.2062 42.3769 10.2008 42.1617C10.583 42.1586 10.9652 42.1594 11.3474 42.1609C11.3381 43.8545 11.3412 45.5489 11.3459 47.2432C10.9644 47.2448 10.583 47.2456 10.2015 47.2417C10.2062 47.0024 10.2093 46.7639 10.2186 46.5254C9.98013 46.7872 9.72532 47.0172 9.38971 47.1453C8.61051 47.4507 7.65806 47.4281 6.96664 46.9201C6.23793 46.3964 5.89766 45.4968 5.94738 44.6166C5.99166 43.6564 6.5751 42.7482 7.43665 42.3186C8.35336 41.8665 9.54664 41.9877 10.2194 42.8081Z"
                                        fill="#252526"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M19.3306 42.1174C20.2077 41.941 21.1469 42.1803 21.7801 42.8259C22.637 43.6766 22.7659 45.1185 22.125 46.1307C21.7824 46.6776 21.2316 47.0793 20.6093 47.2471C19.6918 47.4934 18.6236 47.2681 17.9594 46.5666C17.1484 45.7283 17.0334 44.3338 17.6261 43.3425C17.9928 42.7187 18.6221 42.2658 19.3306 42.1174Z"
                                        fill="#252526"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M25.6762 42.1011C26.2876 41.9993 26.9752 42.084 27.449 42.516C27.9292 42.9526 28.0884 43.6012 28.1063 44.2282C28.1148 45.2335 28.1039 46.2387 28.1117 47.244C27.7178 47.244 27.324 47.244 26.9309 47.2432C26.9348 46.29 26.934 45.336 26.9332 44.3828C26.9262 43.9462 26.8073 43.4832 26.4111 43.2423C25.8533 42.9277 25.0555 43.1235 24.7043 43.6603C24.5233 43.9205 24.4596 44.2251 24.462 44.5382C24.4643 45.4401 24.4596 46.3421 24.4658 47.244C24.0774 47.244 23.6898 47.244 23.3013 47.2448C23.3029 45.5496 23.3044 43.8545 23.3005 42.1594C23.6898 42.1601 24.0797 42.1594 24.4697 42.1609C24.4651 42.3738 24.4604 42.5874 24.4511 42.8003C24.7851 42.4375 25.1852 42.1858 25.6762 42.1011Z"
                                        fill="#252526"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M33.4862 43.0069C33.936 43.5942 34.0028 44.281 33.9399 44.9973C32.644 45.0276 31.3459 45.0004 30.0493 45.012C30.1503 45.409 30.2831 45.771 30.6257 46.0243C31.3241 46.5324 32.3721 46.3459 32.881 45.6522C33.1793 45.8262 33.483 45.9917 33.7853 46.1587C32.9625 47.4934 30.8541 47.7412 29.7059 46.7072C29.0083 46.0748 28.762 45.054 28.9313 44.1482C29.0852 43.334 29.6461 42.6232 30.4059 42.2899C31.4507 41.8253 32.787 42.0661 33.4862 43.0069Z"
                                        fill="#252526"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M39.2218 42.9425C39.7097 43.5368 39.7974 44.2562 39.7275 45.0012C38.4325 45.0167 37.1335 45.0167 35.8385 45.0004C35.9317 45.4331 36.0956 45.8239 36.4794 46.0725C37.1848 46.5169 38.1676 46.3234 38.6671 45.6576C38.9677 45.8262 39.2707 45.9909 39.5706 46.1595C38.7937 47.4242 36.8609 47.7094 35.6854 46.8633C34.8332 46.2457 34.5232 45.1138 34.7244 44.1109C34.893 43.2843 35.4842 42.575 36.2658 42.2588C37.2757 41.8494 38.5218 42.0739 39.2218 42.9425Z"
                                        fill="#252526"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M12.0249 42.1664C12.4615 42.1477 12.8997 42.1648 13.337 42.1609C13.7496 43.3643 14.1714 44.5646 14.5832 45.7687C15.0594 44.5692 15.5201 43.3643 15.9862 42.1617C16.4065 42.1586 16.8268 42.1601 17.2463 42.1594C16.276 44.4442 15.3359 46.7421 14.3695 49.0285C13.9516 49.0262 13.5344 49.0262 13.1164 49.0285C13.386 48.4365 13.6361 47.836 13.9049 47.244C13.2772 45.5605 12.6433 43.8514 12.0249 42.1664Z"
                                        fill="#252526"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M41.7077 42.1601C41.7038 42.3909 41.6991 42.6224 41.6898 42.8531C41.8848 42.5936 42.0876 42.3637 42.3967 42.2417C42.7564 42.0778 43.1208 42.1011 43.4999 42.1663C43.4929 42.526 43.4875 42.8857 43.4898 43.2454C43.0485 43.1825 42.6337 43.1537 42.2414 43.4031C41.877 43.6346 41.7115 44.0394 41.7038 44.4597C41.6991 45.388 41.7022 46.3164 41.7046 47.244C41.3184 47.244 40.9316 47.244 40.5455 47.2448C40.547 45.5496 40.5493 43.8553 40.5447 42.1601C40.9323 42.1594 41.32 42.1594 41.7077 42.1601Z"
                                        fill="#252526"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M32.4777 43.4707C32.6494 43.6618 32.7084 43.8824 32.7915 44.1194C31.8973 44.1341 31.0016 44.1295 30.1074 44.1217C30.2107 43.877 30.2915 43.6478 30.4764 43.4505C30.9853 42.9059 31.9805 42.9145 32.4777 43.4707Z"
                                        fill="white"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M38.2453 43.4505C38.4279 43.6401 38.4947 43.8786 38.5778 44.1209C37.6828 44.1318 36.7863 44.1303 35.8914 44.1217C35.9892 43.891 36.0739 43.6603 36.2448 43.4707C36.7413 42.9121 37.7364 42.9075 38.2453 43.4505Z"
                                        fill="white"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M8.27334 43.156C8.76898 43.0115 9.32988 43.1156 9.70977 43.4746C10.3188 44.0393 10.3724 45.0998 9.83951 45.7329C9.37649 46.3001 8.49241 46.4741 7.85615 46.1074C7.35895 45.8192 7.11035 45.2552 7.11657 44.6943C7.10958 43.9958 7.60678 43.3495 8.27334 43.156Z"
                                        fill="white"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M19.3268 43.2664C19.939 43.0286 20.7516 43.2337 21.123 43.7939C21.5067 44.3594 21.4461 45.1922 21.008 45.712C20.6856 46.1051 20.1806 46.2892 19.6788 46.22C19.0744 46.1455 18.5803 45.6723 18.4497 45.0819C18.2742 44.361 18.6191 43.5453 19.3268 43.2664Z"
                                        fill="white"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_text-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    gap: '0px 0.5rem',
                                    alignItems: 'center',
                                    marginBottom: '0.25rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading margin-bottom-0"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                      marginBottom: '0px',
                                    }}
                                  >
                                    Payoneer
                                  </div>
                                  <div
                                    className="uui-badge-small-success"
                                    style={{
                                      boxSizing: 'border-box',
                                      whiteSpace: 'nowrap',
                                      borderRadius: '10rem',
                                      padding: '0.125rem 0.5rem',
                                      columnGap: '0.25rem',
                                      backgroundColor: '#ecfdf3',
                                      color: '#027a48',
                                      mixBlendMode: 'multiply',
                                      alignItems: 'center',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.75rem',
                                      fontWeight: 500,
                                      display: 'flex',
                                    }}
                                  >
                                    <div style={{ boxSizing: 'border-box' }}>
                                      Nuevo
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  No importa si son euros o dólares, pasamos tu
                                  plata a pesos en minutos️.  
                                </div>
                              </div>
                            </a>
                            <h4
                              className="uui-navbar03_heading"
                              style={{
                                boxSizing: 'border-box',
                                lineHeight: '1.1em',
                                color: '#da0081',
                                letterSpacing: 'normal',
                                marginTop: '0px',
                                marginBottom: '0.25rem',
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              Seguros
                            </h4>
                            <a
                              className="btn-nav-nq w-inline-block"
                              href="https://www.nequi.com.co/personas/seguros-disponibles-en-nequi"
                              tabIndex="0"
                              style={{
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                maxWidth: '100%',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                                alignItems: 'flex-start',
                                display: 'grid',
                                gap: '0px 1rem',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: 'max-content 1fr',
                                gridAutoColumns: '1fr',
                                gridAutoFlow: 'row',
                              }}
                            >
                              <div
                                className="uui-navbar03_icon-wrapper"
                                style={{
                                  boxSizing: 'border-box',
                                  flex: '0 0 auto',
                                }}
                              >
                                <div
                                  className="icon-featured-large"
                                  style={{
                                    boxSizing: 'border-box',
                                    borderRadius: '5%',
                                    backgroundColor: '#ece7f5',
                                    color: '#7f56d9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-icon-1x1-xsmall w-embed"
                                    style={{
                                      boxSizing: 'border-box',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '2.3rem',
                                      height: '2.3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <svg
                                      height="2rem"
                                      width="2rem"
                                      fill="none"
                                      viewBox="0 0 88 88"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      <path
                                        d="M42.3524 80.6667H45.6476C47.3183 80.6667 48.9397 80.1525 50.2478 79.1133C56.021 74.5272 72.1111 60.4858 72.1111 46.4445V19.792C72.1111 18.4586 70.8284 17.5 69.5182 17.7476C61.433 19.2754 51.9838 17.4947 45.208 13.062C44.4753 12.5827 43.5234 12.5809 42.7894 13.0583C36.0008 17.4734 26.5684 19.2729 18.4819 17.7472C17.1716 17.5 15.8889 18.4586 15.8889 19.792V46.4445C15.8889 60.4858 31.979 74.5272 37.7521 79.1133C39.0603 80.1525 40.6817 80.6667 42.3524 80.6667Z"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M47.4833 74.5555C47.4833 74.5555 67.2222 60.5 67.2222 46.4444C67.2222 36.7021 67.2222 28.8959 67.2222 25.0224C67.2222 23.6903 65.9412 22.7314 64.6276 22.9526C58.135 24.0459 50.6629 22.6197 45.2087 19.1585C44.4727 18.6915 43.5259 18.6898 42.7889 19.1549C37.325 22.6029 29.8656 24.0432 23.3725 22.9522C22.0588 22.7314 20.7778 23.6903 20.7778 25.0224C20.7778 28.8959 20.7778 36.7021 20.7778 46.4444"
                                        stroke="#DA0081"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <path
                                        d="M43.4483 53.8589V51.6089H44.5983V53.8589H43.4483ZM43.4483 37.7589V35.4889H44.5983V37.7589H43.4483ZM44.2483 52.1889C43.3083 52.1889 42.4616 52.0256 41.7083 51.6989C40.9616 51.3722 40.3416 50.9089 39.8483 50.3089C39.3616 49.7022 39.0349 48.9889 38.8683 48.1689L39.9883 47.9689C40.2216 48.9222 40.7216 49.6789 41.4883 50.2389C42.2549 50.7922 43.1816 51.0689 44.2683 51.0689C45.3949 51.0689 46.2983 50.7922 46.9783 50.2389C47.6649 49.6856 48.0083 48.9589 48.0083 48.0589C48.0083 47.3856 47.8083 46.8489 47.4083 46.4489C47.0149 46.0422 46.3416 45.6922 45.3883 45.3989L42.2783 44.4389C40.3649 43.8389 39.4083 42.7189 39.4083 41.0789C39.4083 40.3056 39.5983 39.6289 39.9783 39.0489C40.3649 38.4689 40.8983 38.0156 41.5783 37.6889C42.2649 37.3556 43.0583 37.1889 43.9583 37.1889C44.8716 37.1956 45.6849 37.3722 46.3983 37.7189C47.1183 38.0589 47.7083 38.5422 48.1683 39.1689C48.6283 39.7956 48.9249 40.5389 49.0583 41.3989L47.9283 41.6089C47.8349 40.9556 47.6083 40.3822 47.2483 39.8889C46.8883 39.3956 46.4249 39.0122 45.8583 38.7389C45.2983 38.4589 44.6683 38.3189 43.9683 38.3189C43.3149 38.3122 42.7316 38.4256 42.2183 38.6589C41.7116 38.8922 41.3116 39.2156 41.0183 39.6289C40.7249 40.0356 40.5783 40.5056 40.5783 41.0389C40.5783 41.6189 40.7816 42.1089 41.1883 42.5089C41.5949 42.9022 42.2383 43.2356 43.1183 43.5089L45.9283 44.3589C47.0549 44.7056 47.8683 45.1689 48.3683 45.7489C48.8749 46.3222 49.1283 47.0922 49.1283 48.0589C49.1283 48.8922 48.9249 49.6189 48.5183 50.2389C48.1183 50.8522 47.5516 51.3322 46.8183 51.6789C46.0916 52.0189 45.2349 52.1889 44.2483 52.1889Z"
                                        fill="#DA0081"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                      <ellipse
                                        cx="44"
                                        cy="44"
                                        rx="15.8889"
                                        ry="15.8889"
                                        stroke="#200020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        style={{ boxSizing: 'border-box' }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="uui-navbar03_item-right"
                                style={{
                                  boxSizing: 'border-box',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                  fontWeight: 400,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  className="uui-navbar03_item-heading"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#101828',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 600,
                                  }}
                                >
                                  Seguros Nequi
                                </div>
                                <div
                                  className="uui-text-size-small"
                                  style={{
                                    boxSizing: 'border-box',
                                    color: '#344054',
                                    letterSpacing: 'normal',
                                    fontFamily:
                                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                    fontSize: '0.7rem',
                                    lineHeight: '1.1em',
                                  }}
                                >
                                  Respalda tu tranquilidad comprando tus Seguros
                                  desde Nequi.
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="uui-navbar03_bottom-bar"
                      style={{
                        boxSizing: 'border-box',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        paddingTop: '1.5rem',
                        paddingBottom: '1.5rem',
                        display: 'flex',
                        position: 'relative',
                      }}
                    >
                      <div
                        className="uui-navbar03_bottom-bar-background"
                        style={{
                          boxSizing: 'border-box',
                          inset: '0% -50vw',
                          backgroundColor: '#f9fafb',
                          width: '200vw',
                          position: 'absolute',
                        }}
                      />
                      <div
                        className="uui-navbar03_container"
                        style={{
                          boxSizing: 'border-box',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: '100%',
                          maxWidth: '80rem',
                          height: '100%',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          display: 'flex',
                        }}
                      >
                        <div
                          className="uui-navbar03_bottom-bar-left"
                          style={{
                            boxSizing: 'border-box',
                            columnGap: '0.5rem',
                            gridTemplateRows: 'auto',
                            gridTemplateColumns:
                              'max-content minmax(max-content, 1fr)',
                            gridAutoColumns: '1fr',
                            fontWeight: 500,
                            display: 'flex',
                            position: 'relative',
                          }}
                        >
                          <div
                            className="uui-text-size-medium"
                            style={{
                              boxSizing: 'border-box',
                              letterSpacing: 'normal',
                              fontFamily:
                                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                              fontSize: '1rem',
                              lineHeight: 1.5,
                              color: '#200020',
                            }}
                          >
                            ¿No te recibieron un pago por Nequi?
                          </div>
                          <a
                            className="nq-text-secundary"
                            href="https://www.nequi.com.co/personas/ayuda/negocios-que-no-reciben-nequi"
                            tabIndex="0"
                            style={{
                              boxSizing: 'border-box',
                              backgroundColor: 'rgba(0, 0, 0, 0)',
                              textDecoration: 'none',
                              color: 'rgb(218, 0, 129)',
                            }}
                          >
                            Dale clic aquí
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div
                  className="uui-navbar06_menu-dropdown w-dropdown"
                  style={{
                    boxSizing: 'border-box',
                    textAlign: 'left',
                    zIndex: 900,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'inline-block',
                    position: 'static',
                  }}
                >
                  <div
                    id="w-dropdown-toggle-1"
                    className="uui-navbar06_dropdown-toggle w-dropdown-toggle"
                    aria-controls="w-dropdown-list-1"
                    aria-expanded="false"
                    aria-haspopup="menu"
                    role="button"
                    tabIndex="0"
                    style={{
                      boxSizing: 'border-box',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      verticalAlign: 'top',
                      textAlign: 'left',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      position: 'relative',
                      userSelect: 'none',
                      cursor: 'pointer',
                      padding: '1.75rem 2.5rem 1.75rem 1rem',
                      transition: '0.3s',
                      color: '#200020',
                      alignItems: 'center',
                      height: '4rem',
                      paddingRight: '2.5rem',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 400,
                      display: 'flex',
                    }}
                  >
                    <div
                      className="uui-dropdown-icon w-embed"
                      style={{
                        boxSizing: 'border-box',
                        inset: 'auto 0% auto auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '1.25rem',
                        height: '1.25rem',
                        marginRight: '1rem',
                        display: 'flex',
                        position: 'absolute',
                      }}
                    >
                      <svg
                        height="20"
                        width="20"
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ boxSizing: 'border-box', overflow: 'hidden' }}
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.67"
                          style={{ boxSizing: 'border-box' }}
                        />
                      </svg>
                    </div>
                    <div style={{ boxSizing: 'border-box' }}>Ayuda</div>
                  </div>
                  <nav
                    id="w-dropdown-list-1"
                    className="uui-navbar06_dropdown-list w-dropdown-list"
                    aria-labelledby="w-dropdown-toggle-1"
                    style={{
                      boxSizing: 'border-box',
                      background: 'rgb(221, 221, 221)',
                      minWidth: '100%',
                      display: 'none',
                      position: 'absolute',
                      boxShadow:
                        'rgba(0, 0, 0, 0.08) 0px 12px 16px -4px, rgba(16, 24, 40, 0.03) 0px 4px 6px -2px',
                      opacity: 0,
                    }}
                  >
                    <div
                      className="uui-navbar06_container"
                      style={{
                        boxSizing: 'border-box',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '80rem',
                        height: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'flex',
                      }}
                    >
                      <div
                        className="uui-navbar06_dropdown-content"
                        style={{
                          boxSizing: 'border-box',
                          width: '100%',
                          display: 'flex',
                        }}
                      >
                        <div
                          className="uui-navbar06_dropdown-content-left"
                          style={{
                            boxSizing: 'border-box',
                            gap: '0px 2rem',
                            padding: '2rem 2rem 2rem 0px',
                            gridTemplateRows: 'auto',
                            gridTemplateColumns: '1fr 1fr',
                            gridAutoColumns: '1fr',
                            width: '100%',
                            maxWidth: '15rem',
                          }}
                        >
                          <div
                            className="uui-navbar06_dropdown-link-list-wrapper"
                            style={{ boxSizing: 'border-box' }}
                          >
                            <div
                              className="uui-navbar06_dropdown-link-list"
                              style={{
                                boxSizing: 'border-box',
                                gap: '0.25rem 0px',
                                gridTemplateRows: 'max-content max-content',
                                gridTemplateColumns: '1fr',
                                gridAutoRows: 'max-content',
                                gridAutoColumns: '1fr',
                                display: 'grid',
                              }}
                            >
                              <h4
                                className="uui-navbar03_heading"
                                style={{
                                  boxSizing: 'border-box',
                                  lineHeight: '1.1em',
                                  color: '#da0081',
                                  letterSpacing: 'normal',
                                  marginTop: '0px',
                                  marginBottom: '0.25rem',
                                  fontFamily: 'Manrope, sans-serif',
                                  fontSize: '1rem',
                                  fontWeight: 600,
                                }}
                              >
                                Destacados: Blog de educación financiera
                              </h4>
                              <div
                                className="w-dyn-list"
                                style={{ boxSizing: 'border-box' }}
                              >
                                <div
                                  className="w-dyn-items"
                                  role="list"
                                  style={{ boxSizing: 'border-box' }}
                                >
                                  <div
                                    className="w-dyn-item"
                                    role="listitem"
                                    style={{ boxSizing: 'border-box' }}
                                  >
                                    <a
                                      className="btn-nav-featured w-inline-block"
                                      href="https://www.nequi.com.co/blog/no-entiendes-el-mundo-crediticio-nequi-te-presenta-un-glosario-para-los-diferentes-tipos-de-creditos"
                                      tabIndex="0"
                                      style={{
                                        boxSizing: 'border-box',
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        maxWidth: '100%',
                                        display: 'inline-block',
                                        gap: '0px 8px',
                                        borderRadius: '0.5rem',
                                        padding: '0.75rem',
                                        textDecoration: 'none',
                                        transition: '0.3s',
                                        color: '#101828',
                                        gridTemplateRows: 'auto',
                                        gridTemplateColumns: 'max-content 1fr',
                                        gridAutoColumns: '1fr',
                                        alignItems: 'flex-start',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      <div
                                        className="text-menu"
                                        style={{
                                          boxSizing: 'border-box',
                                          fontFamily: 'Manrope, sans-serif',
                                          fontSize: '0.9rem',
                                          fontWeight: 500,
                                          lineHeight: '1.1em',
                                        }}
                                      >
                                        ¿No entiendes el mundo crediticio? Nequi
                                        te presenta un glosario para los
                                        diferentes tipos de créditos
                                      </div>
                                    </a>
                                  </div>
                                  <div
                                    className="w-dyn-item"
                                    role="listitem"
                                    style={{ boxSizing: 'border-box' }}
                                  >
                                    <a
                                      className="btn-nav-featured w-inline-block"
                                      href="https://www.nequi.com.co/blog/inviertes-en-tu-pareja-y-en-tus-amigos-que-tanto-inviertes-en-tu-futuro-financiero"
                                      tabIndex="0"
                                      style={{
                                        boxSizing: 'border-box',
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        maxWidth: '100%',
                                        display: 'inline-block',
                                        gap: '0px 8px',
                                        borderRadius: '0.5rem',
                                        padding: '0.75rem',
                                        textDecoration: 'none',
                                        transition: '0.3s',
                                        color: '#101828',
                                        gridTemplateRows: 'auto',
                                        gridTemplateColumns: 'max-content 1fr',
                                        gridAutoColumns: '1fr',
                                        alignItems: 'flex-start',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      <div
                                        className="text-menu"
                                        style={{
                                          boxSizing: 'border-box',
                                          fontFamily: 'Manrope, sans-serif',
                                          fontSize: '0.9rem',
                                          fontWeight: 500,
                                          lineHeight: '1.1em',
                                        }}
                                      >
                                        Inviertes en tu pareja y en tus amigos…
                                        pero, ¿cuánto estás invirtiendo en tu
                                        futuro financiero?
                                      </div>
                                    </a>
                                  </div>
                                  <div
                                    className="w-dyn-item"
                                    role="listitem"
                                    style={{ boxSizing: 'border-box' }}
                                  >
                                    <a
                                      className="btn-nav-featured w-inline-block"
                                      href="https://www.nequi.com.co/blog/como-enviar-plata-entre-diferentes-bancos-con-bre-b"
                                      tabIndex="0"
                                      style={{
                                        boxSizing: 'border-box',
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        maxWidth: '100%',
                                        display: 'inline-block',
                                        gap: '0px 8px',
                                        borderRadius: '0.5rem',
                                        padding: '0.75rem',
                                        textDecoration: 'none',
                                        transition: '0.3s',
                                        color: '#101828',
                                        gridTemplateRows: 'auto',
                                        gridTemplateColumns: 'max-content 1fr',
                                        gridAutoColumns: '1fr',
                                        alignItems: 'flex-start',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      <div
                                        className="text-menu"
                                        style={{
                                          boxSizing: 'border-box',
                                          fontFamily: 'Manrope, sans-serif',
                                          fontSize: '0.9rem',
                                          fontWeight: 500,
                                          lineHeight: '1.1em',
                                        }}
                                      >
                                        ¿Cómo enviar plata entre diferentes
                                        bancos con Bre-B?
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="uui-navbar06_dropdown-content-right"
                          style={{
                            boxSizing: 'border-box',
                            flexWrap: 'wrap',
                            width: '100%',
                            paddingTop: '1.25rem',
                            paddingBottom: '2rem',
                            display: 'flex',
                            position: 'relative',
                          }}
                        >
                          <div
                            className="uui-navbar06_blog-list-wrapper none-display"
                            style={{ boxSizing: 'border-box' }}
                          >
                            <div
                              className="uui-navbar06_blog-list"
                              style={{
                                boxSizing: 'border-box',
                                gap: '0.5rem 1.5rem',
                                gridTemplateRows: 'max-content',
                                gridTemplateColumns: '1fr 1fr',
                                gridAutoRows: 'max-content',
                                gridAutoColumns: 'max-content',
                                alignItems: 'start',
                                width: '100%',
                                display: 'grid',
                              }}
                            >
                              <a
                                className="btn-nav-nq w-inline-block"
                                href="https://ayuda.nequi.com.co/hc/es?_ga=2.79334294.388375731.1729516481-56085136.1724765253"
                                tabIndex="0"
                                style={{
                                  boxSizing: 'border-box',
                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                  maxWidth: '100%',
                                  borderRadius: '0.5rem',
                                  padding: '0.5rem 0.75rem',
                                  textDecoration: 'none',
                                  transition: 'background-color 0.3s',
                                  alignItems: 'flex-start',
                                  display: 'grid',
                                  gap: '0px 1rem',
                                  gridTemplateRows: 'auto',
                                  gridTemplateColumns: 'max-content 1fr',
                                  gridAutoColumns: '1fr',
                                  gridAutoFlow: 'row',
                                }}
                              >
                                <div
                                  className="uui-navbar03_icon-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    flex: '0 0 auto',
                                  }}
                                >
                                  <div
                                    className="icon-featured-large"
                                    style={{
                                      boxSizing: 'border-box',
                                      borderRadius: '5%',
                                      backgroundColor: '#ece7f5',
                                      color: '#7f56d9',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '3rem',
                                      height: '3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-icon-1x1-xsmall w-embed"
                                      style={{
                                        boxSizing: 'border-box',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '2.3rem',
                                        height: '2.3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <svg
                                        height="2rem"
                                        width="2rem"
                                        fill="none"
                                        viewBox="0 0 200 200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <path
                                          d="M40.09 81.04L38.95 80.39C38.79 80.3 38.74 80.1 38.83 79.94L39.24 79.21L46.66 66.18L47.11 65.39C47.2 65.23 47.4 65.18 47.56 65.27L48.7 65.92C48.86 66.01 48.91 66.21 48.82 66.37L48.37 67.16L40.95 80.19L40.54 80.92C40.45 81.08 40.25 81.13 40.09 81.04Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M49.7942 75.7874L49.146 76.9257C49.0558 77.0841 49.1111 77.2856 49.2694 77.3758L50.6163 78.1428C50.7747 78.233 50.9762 78.1777 51.0664 78.0194L51.7147 76.881C51.8049 76.7226 51.7496 76.5211 51.5912 76.4309L50.2443 75.6639C50.0859 75.5737 49.8844 75.629 49.7942 75.7874Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M48.18 76.39L48.83 75.25C48.92 75.09 48.86 74.89 48.71 74.8L47.9 74.34L37.84 68.61L37.05 68.16C36.89 68.07 36.69 68.13 36.6 68.28L35.95 69.42C35.86 69.58 35.92 69.78 36.07 69.87L36.86 70.32L46.92 76.05L47.73 76.51C47.89 76.6 48.09 76.54 48.18 76.39Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M152.06 171.27C150.54 163.3 142.85 158.08 134.88 159.59C142.85 158.07 148.07 150.38 146.56 142.41C148.08 150.38 155.77 155.6 163.74 154.09C155.77 155.61 150.55 163.3 152.06 171.27Z"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M116.56 44.08C118.91 39.84 117.38 34.5 113.14 32.15C117.38 34.5 122.72 32.97 125.07 28.73C122.72 32.97 124.25 38.31 128.49 40.66C124.25 38.31 118.91 39.84 116.56 44.08Z"
                                          stroke="#D90080"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M117.47 118.89C117.47 116.3 117.77 113.7 118.38 111.1C118.99 108.51 119.9 106.15 121.12 104.02C122.1 102.02 123.17 100.43 124.33 99.27C125.49 98.11 126.83 96.92 128.34 95.7C129.85 94.48 131.65 92.77 133.74 90.57C135.35 88.8 136.42 87.06 136.95 85.35C137.48 83.64 137.75 81.76 137.75 79.72C137.75 78.66 137.64 77.64 137.43 76.65C137.21 75.67 136.81 74.8 136.22 74.06C135.28 72.76 134.03 71.83 132.47 71.26C130.92 70.69 129.25 70.41 127.49 70.41C126.15 70.41 124.84 70.57 123.57 70.88C122.29 71.2 121.2 71.71 120.3 72.41C119.2 73.24 118.38 74.28 117.85 75.54C117.32 76.8 117.07 78.19 117.11 79.73H100.12C100.59 75.52 101.79 71.67 103.72 68.17C105.65 64.67 108.14 61.92 111.21 59.91C113.45 58.42 115.93 57.28 118.64 56.49C121.35 55.7 124.07 55.31 126.78 55.31C131.26 55.31 135.49 56.01 139.46 57.4C143.43 58.8 146.71 61.09 149.31 64.27C151.04 66.28 152.38 68.61 153.32 71.26C154.26 73.91 154.73 76.58 154.73 79.25C154.73 83.54 153.77 87.43 151.84 90.93C149.91 94.43 147.53 97.69 144.7 100.72C143.48 102.02 142.39 103.15 141.43 104.11C140.47 105.07 139.6 105.98 138.84 106.82C138.08 107.66 137.39 108.54 136.8 109.44C135.7 111.25 135.03 112.72 134.8 113.86C134.57 115 134.45 116.67 134.45 118.87H117.47V118.89Z"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M134.46 124.9H117.59V141.88H134.46V124.9Z"
                                          fill="#DA0081"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M126.03 141.89H117.59V124.9H134.46V132.96"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M126.03 118.89H117.48C117.48 116.3 117.78 113.7 118.39 111.1C119 108.51 119.91 106.15 121.13 104.02C122.11 102.02 123.18 100.43 124.34 99.27C125.5 98.11 126.84 96.92 128.35 95.7C129.86 94.48 131.66 92.77 133.75 90.57C135.36 88.8 136.43 87.06 136.96 85.35C137.49 83.64 137.76 81.76 137.76 79.72C137.76 78.66 137.65 77.64 137.44 76.65C137.22 75.67 136.82 74.8 136.23 74.06C135.29 72.76 134.04 71.83 132.48 71.26C130.93 70.69 129.26 70.41 127.5 70.41C126.16 70.41 124.85 70.57 123.58 70.88C122.3 71.2 121.21 71.71 120.31 72.41C119.21 73.24 118.39 74.28 117.86 75.54C117.33 76.8 117.08 78.19 117.12 79.73H100.13C100.6 75.52 101.8 71.67 103.73 68.17C105.66 64.67 108.15 61.92 111.22 59.91C113.46 58.42 115.94 57.28 118.65 56.49C121.36 55.7 124.08 55.31 126.79 55.31C131.27 55.31 135.5 56.01 139.47 57.4C143.44 58.8 146.72 61.09 149.32 64.27C151.05 66.28 152.39 68.61 153.33 71.26C154.27 73.91 154.74 76.58 154.74 79.25C154.74 83.54 153.78 87.43 151.85 90.93C151.17 92.17 150.43 93.37 149.64 94.55"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M126.03 118.89H117.48C117.48 116.3 117.78 113.7 118.39 111.1C119 108.51 119.91 106.15 121.13 104.02C122.11 102.02 123.18 100.43 124.34 99.27C125.5 98.11 126.84 96.92 128.35 95.7C129.86 94.48 131.66 92.77 133.75 90.57C135.36 88.8 136.43 87.06 136.96 85.35C137.49 83.64 137.76 81.76 137.76 79.72C137.76 78.66 137.65 77.64 137.44 76.65C137.22 75.67 136.82 74.8 136.23 74.06C135.29 72.76 134.04 71.83 132.48 71.26C130.93 70.69 129.26 70.41 127.5 70.41C126.16 70.41 124.85 70.57 123.58 70.88C122.3 71.2 121.21 71.71 120.31 72.41C119.21 73.24 118.39 74.28 117.86 75.54C117.33 76.8 117.08 78.19 117.12 79.73H100.13C100.6 75.52 101.8 71.67 103.73 68.17C105.66 64.67 108.15 61.92 111.22 59.91C113.46 58.42 115.94 57.28 118.65 56.49C121.36 55.7 124.08 55.31 126.79 55.31C131.27 55.31 135.5 56.01 139.47 57.4C143.44 58.8 146.72 61.09 149.32 64.27C151.05 66.28 152.39 68.61 153.33 71.26C154.27 73.91 154.74 76.58 154.74 79.25C154.74 83.54 153.78 87.43 151.85 90.93C151.17 92.17 150.43 93.37 149.64 94.55"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M134.49 140.25H132.81C132.578 140.25 132.39 140.438 132.39 140.67V142.35C132.39 142.582 132.578 142.77 132.81 142.77H134.49C134.722 142.77 134.91 142.582 134.91 142.35V140.67C134.91 140.438 134.722 140.25 134.49 140.25Z"
                                          fill="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M88.3201 79.19C88.3201 81.78 88.0201 84.38 87.4101 86.98C86.8001 89.57 85.8901 91.93 84.6701 94.06C83.6901 96.06 82.6201 97.65 81.4601 98.81C80.3001 99.97 78.9601 101.16 77.4501 102.38C75.9401 103.6 74.1401 105.31 72.0501 107.51C70.4401 109.28 69.3701 111.02 68.8401 112.73C68.3101 114.44 68.0401 116.32 68.0401 118.36C68.0401 119.42 68.1501 120.44 68.3601 121.43C68.5801 122.41 68.9801 123.28 69.5701 124.02C70.5101 125.32 71.7601 126.25 73.3201 126.82C74.8701 127.39 76.5401 127.67 78.3001 127.67C79.6401 127.67 80.9501 127.51 82.2201 127.2C83.5001 126.88 84.5901 126.37 85.4901 125.67C86.5901 124.84 87.4101 123.8 87.9401 122.54C88.4701 121.28 88.7201 119.89 88.6801 118.35H105.67C105.2 122.56 104 126.41 102.07 129.91C100.14 133.41 97.6501 136.16 94.5801 138.17C92.3401 139.66 89.8601 140.8 87.1501 141.59C84.4401 142.38 81.7201 142.77 79.0101 142.77C74.5301 142.77 70.3001 142.07 66.3301 140.68C62.3601 139.28 59.0801 136.99 56.4801 133.81C54.7501 131.8 53.4101 129.47 52.4701 126.82C51.5301 124.17 51.0601 121.5 51.0601 118.83C51.0601 114.54 52.0201 110.65 53.9501 107.15C55.8801 103.65 58.2601 100.39 61.0901 97.36C62.3101 96.06 63.4001 94.93 64.3601 93.97C65.3201 93.01 66.1901 92.1 66.9501 91.26C67.7101 90.42 68.4001 89.54 68.9901 88.64C70.0901 86.83 70.7601 85.36 70.9901 84.22C71.2201 83.08 71.3401 81.41 71.3401 79.21H88.3201V79.19Z"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M88.2101 56.19H71.3401V73.17H88.2101V56.19Z"
                                          fill="#DA0081"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M79.7701 56.19H88.2001V73.18H71.3401V65.12"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M79.7701 79.19H88.3201C88.3201 81.78 88.0201 84.38 87.4101 86.98C86.8001 89.57 85.8901 91.93 84.6701 94.06C83.6901 96.06 82.6201 97.65 81.4601 98.81C80.3001 99.97 78.9601 101.16 77.4501 102.38C75.9401 103.6 74.1401 105.31 72.0501 107.51C70.4401 109.28 69.3701 111.02 68.8401 112.73C68.3101 114.44 68.0401 116.32 68.0401 118.36C68.0401 119.42 68.1501 120.44 68.3601 121.43C68.5801 122.41 68.9801 123.28 69.5701 124.02C70.5101 125.32 71.7601 126.25 73.3201 126.82C74.8701 127.39 76.5401 127.67 78.3001 127.67C79.6401 127.67 80.9501 127.51 82.2201 127.2C83.5001 126.88 84.5901 126.37 85.4901 125.67C86.5901 124.84 87.4101 123.8 87.9401 122.54C88.4701 121.28 88.7201 119.89 88.6801 118.35H105.67C105.2 122.56 104 126.41 102.07 129.91C100.14 133.41 97.6501 136.16 94.5801 138.17C92.3401 139.66 89.8601 140.8 87.1501 141.59C84.4401 142.38 81.7201 142.77 79.0101 142.77C74.5301 142.77 70.3001 142.07 66.3301 140.68C62.3601 139.28 59.0801 136.99 56.4801 133.81C54.7501 131.8 53.4101 129.47 52.4701 126.82C51.5301 124.17 51.0601 121.5 51.0601 118.83C51.0601 114.54 52.0201 110.65 53.9501 107.15C54.6301 105.91 55.3701 104.71 56.1601 103.53"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M79.7701 79.19H88.3201C88.3201 81.78 88.0201 84.38 87.4101 86.98C86.8001 89.57 85.8901 91.93 84.6701 94.06C83.6901 96.06 82.6201 97.65 81.4601 98.81C80.3001 99.97 78.9601 101.16 77.4501 102.38C75.9401 103.6 74.1401 105.31 72.0501 107.51C70.4401 109.28 69.3701 111.02 68.8401 112.73C68.3101 114.44 68.0401 116.32 68.0401 118.36C68.0401 119.42 68.1501 120.44 68.3601 121.43C68.5801 122.41 68.9801 123.28 69.5701 124.02C70.5101 125.32 71.7601 126.25 73.3201 126.82C74.8701 127.39 76.5401 127.67 78.3001 127.67C79.6401 127.67 80.9501 127.51 82.2201 127.2C83.5001 126.88 84.5901 126.37 85.4901 125.67C86.5901 124.84 87.4101 123.8 87.9401 122.54C88.4701 121.28 88.7201 119.89 88.6801 118.35H105.67C105.2 122.56 104 126.41 102.07 129.91C100.14 133.41 97.6501 136.16 94.5801 138.17C92.3401 139.66 89.8601 140.8 87.1501 141.59C84.4401 142.38 81.7201 142.77 79.0101 142.77C74.5301 142.77 70.3001 142.07 66.3301 140.68C62.3601 139.28 59.0801 136.99 56.4801 133.81C54.7501 131.8 53.4101 129.47 52.4701 126.82C51.5301 124.17 51.0601 121.5 51.0601 118.83C51.0601 114.54 52.0201 110.65 53.9501 107.15C54.6301 105.91 55.3701 104.71 56.1601 103.53"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M71.31 57.83H72.99C73.222 57.83 73.41 57.642 73.41 57.41V55.73C73.41 55.498 73.222 55.31 72.99 55.31H71.31C71.0781 55.31 70.89 55.498 70.89 55.73V57.41C70.89 57.642 71.0781 57.83 71.31 57.83Z"
                                          fill="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M148.32 94.76C148.97 94.51 149.69 94.98 149.73 95.67C149.9 98.84 147.31 105.22 143.89 102.79C140.77 100.58 145.23 95.96 148.33 94.76H148.32Z"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-navbar03_item-right"
                                  style={{
                                    boxSizing: 'border-box',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    fontWeight: 400,
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      marginBottom: '0.25rem',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                    }}
                                  >
                                    Centro de Ayuda
                                  </div>
                                  <div
                                    className="uui-text-size-small"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#344054',
                                      letterSpacing: 'normal',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.7rem',
                                      lineHeight: '1.1em',
                                    }}
                                  >
                                    ¿Necesitas hacer algo en Nequi y no sabes
                                    cómo? Aquí te explicamos paso a paso.
                                  </div>
                                </div>
                              </a>
                              <a
                                className="btn-nav-nq w-inline-block"
                                href="https://comunidad.nequi.co/?_ga=2.79334294.388375731.1729516481-56085136.1724765253"
                                tabIndex="0"
                                style={{
                                  boxSizing: 'border-box',
                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                  maxWidth: '100%',
                                  borderRadius: '0.5rem',
                                  padding: '0.5rem 0.75rem',
                                  textDecoration: 'none',
                                  transition: 'background-color 0.3s',
                                  alignItems: 'flex-start',
                                  display: 'grid',
                                  gap: '0px 1rem',
                                  gridTemplateRows: 'auto',
                                  gridTemplateColumns: 'max-content 1fr',
                                  gridAutoColumns: '1fr',
                                  gridAutoFlow: 'row',
                                }}
                              >
                                <div
                                  className="uui-navbar03_icon-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    flex: '0 0 auto',
                                  }}
                                >
                                  <div
                                    className="icon-featured-large"
                                    style={{
                                      boxSizing: 'border-box',
                                      borderRadius: '5%',
                                      backgroundColor: '#ece7f5',
                                      color: '#7f56d9',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '3rem',
                                      height: '3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-icon-1x1-xsmall w-embed"
                                      style={{
                                        boxSizing: 'border-box',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '2.3rem',
                                        height: '2.3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <svg
                                        id="Capa_1"
                                        viewBox="0 0 200 200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <defs
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <g style={{ boxSizing: 'border-box' }}>
                                          <path
                                            className="cls-4"
                                            d="m39.79,66.02l-1.14-.65c-.16-.09-.21-.29-.12-.45l.41-.73,5.65-9.92.45-.79c.09-.16.29-.21.45-.12l1.14.65c.16.09.21.29.12.45l-.45.79-5.65,9.92-.41.73c-.09.16-.29.21-.45.12Z"
                                            style={{
                                              boxSizing: 'border-box',
                                              fill: 'rgb(43, 13, 43)',
                                            }}
                                          />
                                          <g
                                            style={{ boxSizing: 'border-box' }}
                                          >
                                            <rect
                                              className="cls-4"
                                              height="2.21"
                                              width="1.97"
                                              rx=".33"
                                              ry=".33"
                                              transform="translate(-30.28 73.03) rotate(-60.34)"
                                              x="46.69"
                                              y="61.46"
                                              style={{
                                                boxSizing: 'border-box',
                                                fill: 'rgb(43, 13, 43)',
                                              }}
                                            />
                                            <path
                                              className="cls-4"
                                              d="m45.43,62.04l.65-1.14c.09-.16.03-.36-.12-.45l-.81-.46-6.96-3.96-.79-.45c-.16-.09-.36-.03-.45.12l-.65,1.14c-.09.16-.03.36.12.45l.79.45,6.96,3.96.81.46c.16.09.36.03.45-.12Z"
                                              style={{
                                                boxSizing: 'border-box',
                                                fill: 'rgb(43, 13, 43)',
                                              }}
                                            />
                                          </g>
                                        </g>
                                        <path
                                          className="cls-5"
                                          d="m138.63,172h0c-1.21-6.33-7.32-10.48-13.65-9.28h0c6.33-1.21,10.48-7.32,9.28-13.65h0c1.21,6.33,7.32,10.48,13.65,9.28h0c-6.33,1.21-10.48,7.32-9.28,13.65Z"
                                          style={{
                                            boxSizing: 'border-box',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2px',
                                            stroke: 'rgb(32, 0, 32)',
                                            fill: 'none',
                                          }}
                                        />
                                        <path
                                          className="cls-6"
                                          d="m142.44,51.79h0c1.87-3.37.65-7.61-2.72-9.48h0c3.37,1.87,7.61.65,9.48-2.72h0c-1.87,3.37-.65,7.61,2.72,9.48h0c-3.37-1.87-7.61-.65-9.48,2.72Z"
                                          style={{
                                            boxSizing: 'border-box',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2px',
                                            fill: 'none',
                                            stroke: 'rgb(217, 0, 128)',
                                          }}
                                        />
                                        <path
                                          className="cls-2"
                                          d="m157.81,64h-71.42c-2.78,0-5.04,2.26-5.04,5.04v52.39c0,2.78,2.26,5.04,5.04,5.04h51.82l5.9,10.21c.88,1.53,3.09,1.53,3.97,0l5.9-10.21h3.83c2.78,0,5.04-2.26,5.04-5.04v-52.39c0-2.78-2.26-5.04-5.04-5.04Z"
                                          style={{
                                            boxSizing: 'border-box',
                                            fill: 'rgb(236, 231, 245)',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2px',
                                            stroke: 'rgb(32, 0, 32)',
                                          }}
                                        />
                                        <path
                                          className="cls-1"
                                          d="m56.19,75.17h71.42c2.78,0,5.04,2.26,5.04,5.04v52.39c0,2.78-2.26,5.04-5.04,5.04h-51.82s-5.9,10.21-5.9,10.21c-.88,1.53-3.09,1.53-3.97,0l-5.9-10.21h-3.83c-2.78,0-5.04-2.26-5.04-5.04v-52.39c0-2.78,2.26-5.04,5.04-5.04Z"
                                          style={{
                                            boxSizing: 'border-box',
                                            fill: 'rgb(236, 231, 245)',
                                          }}
                                        />
                                        <line
                                          className="cls-7"
                                          x1="114.71"
                                          x2="117"
                                          y1="75.17"
                                          y2="75.17"
                                          style={{
                                            boxSizing: 'border-box',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2px',
                                            stroke: 'rgb(32, 0, 32)',
                                            fill: 'none',
                                          }}
                                        />
                                        <path
                                          className="cls-7"
                                          d="m132.65,91.88v40.73c0,2.78-2.26,5.04-5.04,5.04h-51.82s-5.9,10.21-5.9,10.21c-.88,1.53-3.09,1.53-3.97,0l-5.9-10.21h-3.83c-2.78,0-5.04-2.26-5.04-5.04v-52.39c0-2.78,2.26-5.04,5.04-5.04h57.23"
                                          style={{
                                            boxSizing: 'border-box',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2px',
                                            stroke: 'rgb(32, 0, 32)',
                                            fill: 'none',
                                          }}
                                        />
                                        <path
                                          className="cls-5"
                                          d="m133.25,91.78c-.63.41-1.5.08-1.7-.64-.91-3.32.38-10.66,4.56-8.87,3.81,1.63.14,7.54-2.86,9.51Z"
                                          style={{
                                            boxSizing: 'border-box',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2px',
                                            stroke: 'rgb(32, 0, 32)',
                                            fill: 'none',
                                          }}
                                        />
                                        <g style={{ boxSizing: 'border-box' }}>
                                          <rect
                                            className="cls-3"
                                            height="8"
                                            width="11"
                                            rx="1.62"
                                            ry="1.62"
                                            x="69"
                                            y="102"
                                            style={{
                                              boxSizing: 'border-box',
                                              fill: 'rgb(218, 0, 129)',
                                            }}
                                          />
                                          <rect
                                            className="cls-3"
                                            height="8"
                                            width="11"
                                            rx="1.62"
                                            ry="1.62"
                                            x="86"
                                            y="102"
                                            style={{
                                              boxSizing: 'border-box',
                                              fill: 'rgb(218, 0, 129)',
                                            }}
                                          />
                                          <rect
                                            className="cls-3"
                                            height="8"
                                            width="11"
                                            rx="1.62"
                                            ry="1.62"
                                            x="104"
                                            y="102"
                                            style={{
                                              boxSizing: 'border-box',
                                              fill: 'rgb(218, 0, 129)',
                                            }}
                                          />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-navbar03_item-right"
                                  style={{
                                    boxSizing: 'border-box',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    fontWeight: 400,
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      marginBottom: '0.25rem',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                    }}
                                  >
                                    Comunidad Nequi
                                  </div>
                                  <div
                                    className="uui-text-size-small"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#344054',
                                      letterSpacing: 'normal',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.7rem',
                                      lineHeight: '1.1em',
                                    }}
                                  >
                                    Comparte tus ideas y ayuda a otros Nequis
                                    como tú.
                                  </div>
                                </div>
                              </a>
                              <a
                                className="btn-nav-nq w-inline-block"
                                href="https://www.nequi.com.co/personas/ayuda/tips-de-seguridad"
                                tabIndex="0"
                                style={{
                                  boxSizing: 'border-box',
                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                  maxWidth: '100%',
                                  borderRadius: '0.5rem',
                                  padding: '0.5rem 0.75rem',
                                  textDecoration: 'none',
                                  transition: 'background-color 0.3s',
                                  alignItems: 'flex-start',
                                  display: 'grid',
                                  gap: '0px 1rem',
                                  gridTemplateRows: 'auto',
                                  gridTemplateColumns: 'max-content 1fr',
                                  gridAutoColumns: '1fr',
                                  gridAutoFlow: 'row',
                                }}
                              >
                                <div
                                  className="uui-navbar03_icon-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    flex: '0 0 auto',
                                  }}
                                >
                                  <div
                                    className="icon-featured-large"
                                    style={{
                                      boxSizing: 'border-box',
                                      borderRadius: '5%',
                                      backgroundColor: '#ece7f5',
                                      color: '#7f56d9',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '3rem',
                                      height: '3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-icon-1x1-xsmall w-embed"
                                      style={{
                                        boxSizing: 'border-box',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '2.3rem',
                                        height: '2.3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <svg
                                        height="2rem"
                                        width="2rem"
                                        fill="none"
                                        viewBox="0 0 91 91"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <path
                                          d="M22.3031 29.2575L21.4498 28.7709C21.33 28.7036 21.2926 28.5539 21.3599 28.4341L21.6668 27.8877L24.8331 22.3261L25.1699 21.7348C25.2373 21.615 25.387 21.5776 25.5068 21.645L26.3601 22.1315C26.4798 22.1989 26.5173 22.3486 26.4499 22.4683L26.1131 23.0597L22.9468 28.6212L22.6399 29.1677C22.5725 29.2874 22.4228 29.3248 22.3031 29.2575Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M25.7878 27.0927L26.273 26.2406C26.3397 26.1235 26.4928 26.0815 26.6099 26.1482L27.6181 26.7224C27.7352 26.789 27.7772 26.9422 27.7105 27.0592L27.2253 27.9113C27.1586 28.0284 27.0055 28.0704 26.8884 28.0037L25.8802 27.4296C25.7631 27.3629 25.7211 27.2098 25.7878 27.0927Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M25.0727 26.6825L25.5592 25.8292C25.6266 25.7094 25.5817 25.5597 25.4694 25.4924L24.8631 25.148L21.5172 23.2468L20.9258 22.9099C20.8061 22.8426 20.6564 22.8875 20.589 22.9998L20.1025 23.8531C20.0351 23.9729 20.08 24.1226 20.1923 24.1899L20.7836 24.5268L24.1295 26.428L24.7358 26.7723C24.8556 26.8397 25.0053 26.7948 25.0727 26.6825Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M74.3181 75.5464C73.9064 73.3832 71.818 71.961 69.6548 72.3727C71.818 71.961 73.2402 69.8726 72.8285 67.7094C73.2402 69.8726 75.3286 71.2948 77.4919 70.8831C75.3286 71.2948 73.9064 73.3832 74.3181 75.5464Z"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.49705"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M7.98384 56.257C9.09166 54.2584 8.37308 51.7434 6.37451 50.6356C8.37308 51.7434 10.8881 51.0248 11.9959 49.0262C10.8881 51.0248 11.6067 53.5399 13.6053 54.6477C11.6067 53.5399 9.09166 54.2584 7.98384 56.257Z"
                                          stroke="#D90080"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.49705"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M24.0622 33.105H66.4438C68.098 33.105 69.4304 34.4448 69.4304 36.0916V67.1779C69.4304 68.8322 68.0905 70.1645 66.4438 70.1645H35.6943L32.1912 76.2276C31.6673 77.1333 30.3573 77.1333 29.8334 76.2276L26.3303 70.1645H24.0547C22.4005 70.1645 21.0681 68.8247 21.0681 67.1779V36.0916C21.0681 34.4374 22.408 33.105 24.0547 33.105H24.0622Z"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M58.7864 33.105H60.1487"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="1.49705"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M69.4304 43.0156V67.1855C69.4304 68.8397 68.0906 70.1721 66.4438 70.1721H35.6943L32.1912 76.2352C31.6673 77.1409 30.3573 77.1409 29.8334 76.2352L26.3303 70.1721H24.0547C22.4005 70.1721 21.0681 68.8322 21.0681 67.1855V36.0992C21.0681 34.4449 22.408 33.1125 24.0547 33.1125H58.0154"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="1.49705"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M69.7896 42.9632C69.4153 43.2102 68.8989 43.0156 68.7866 42.5814C68.2476 40.6128 69.0111 36.2564 71.4888 37.3193C73.7493 38.2849 71.5711 41.788 69.7896 42.9632Z"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.49705"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M36.9742 49.0262H32.8723C32.2026 49.0262 31.6597 49.5692 31.6597 50.2389V52.5593C31.6597 53.229 32.2026 53.7719 32.8723 53.7719H36.9742C37.6439 53.7719 38.1868 53.229 38.1868 52.5593V50.2389C38.1868 49.5692 37.6439 49.0262 36.9742 49.0262Z"
                                          fill="#DA0081"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M47.0645 49.0262H42.9626C42.2929 49.0262 41.75 49.5692 41.75 50.2389V52.5593C41.75 53.229 42.2929 53.7719 42.9626 53.7719H47.0645C47.7342 53.7719 48.2772 53.229 48.2772 52.5593V50.2389C48.2772 49.5692 47.7342 49.0262 47.0645 49.0262Z"
                                          fill="#DA0081"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M57.7459 49.0262H53.644C52.9743 49.0262 52.4314 49.5692 52.4314 50.2389V52.5593C52.4314 53.229 52.9743 53.7719 53.644 53.7719H57.7459C58.4156 53.7719 58.9585 53.229 58.9585 52.5593V50.2389C58.9585 49.5692 58.4156 49.0262 57.7459 49.0262Z"
                                          fill="#DA0081"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M84.5058 31.0392C84.5058 40.2311 77.058 47.6789 67.8661 47.6789C58.6742 47.6789 51.2263 40.2311 51.2263 31.0392C51.2263 21.8473 58.6742 14.3994 67.8661 14.3994C74.9172 14.3994 80.9503 18.7858 83.368 24.9836"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M84.5058 31.0392C84.5058 40.2311 77.058 47.6789 67.8661 47.6789C58.6742 47.6789 51.2263 40.2311 51.2263 31.0392C51.2263 21.8473 58.6742 14.3994 67.8661 14.3994C74.9172 14.3994 80.9503 18.7858 83.368 24.9836"
                                          stroke="#DA0081"
                                          strokeLinejoin="round"
                                          strokeWidth="1.49705"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M68.33 41.204C73.944 41.204 78.495 36.653 78.495 31.039C78.495 25.425 73.944 20.874 68.33 20.874C62.7161 20.874 58.165 25.425 58.165 31.039C58.165 36.653 62.7161 41.204 68.33 41.204Z"
                                          fill="#ECE7F5"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="1.49705"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M77.1028 25.9191C75.3362 22.91 72.0801 20.8815 68.3375 20.8815C64.5949 20.8815 61.3313 22.91 59.5723 25.9191H77.1102H77.1028Z"
                                          fill="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M63.9512 35.0811C64.8344 36.5856 66.4662 37.6036 68.3375 37.6036C70.2088 37.6036 71.8406 36.5856 72.7239 35.0811H63.9587H63.9512Z"
                                          fill="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M78.2256 33.3369C78.3977 32.5959 78.495 31.8324 78.495 31.0389C78.495 30.1033 78.3603 29.205 78.1208 28.3442H58.5393C58.3073 29.205 58.165 30.1033 58.165 31.0389C58.165 31.8324 58.2623 32.5959 58.4345 33.3369H78.2181H78.2256Z"
                                          fill="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M65.4932 30.0734H61.5559C61.1797 30.0734 60.8748 30.3783 60.8748 30.7545V30.9267C60.8748 31.3029 61.1797 31.6078 61.5559 31.6078H65.4932C65.8694 31.6078 66.1743 31.3029 66.1743 30.9267V30.7545C66.1743 30.3783 65.8694 30.0734 65.4932 30.0734Z"
                                          fill="white"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M74.6401 30.0734H70.7029C70.3267 30.0734 70.0217 30.3783 70.0217 30.7545V30.9267C70.0217 31.3029 70.3267 31.6078 70.7029 31.6078H74.6401C75.0163 31.6078 75.3213 31.3029 75.3213 30.9267V30.7545C75.3213 30.3783 75.0163 30.0734 74.6401 30.0734Z"
                                          fill="white"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-navbar03_item-right"
                                  style={{
                                    boxSizing: 'border-box',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    fontWeight: 400,
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      marginBottom: '0.25rem',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                    }}
                                  >
                                    Tips de seguridad
                                  </div>
                                  <div
                                    className="uui-text-size-small"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#344054',
                                      letterSpacing: 'normal',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.7rem',
                                      lineHeight: '1.1em',
                                    }}
                                  >
                                    ¡Pilas con dar papaya! Te enseñamos a
                                    proteger tu plata.
                                  </div>
                                </div>
                              </a>
                              <a
                                className="btn-nav-nq w-inline-block"
                                href="https://www.nequi.com.co/personas/ayuda/status"
                                tabIndex="0"
                                style={{
                                  boxSizing: 'border-box',
                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                  maxWidth: '100%',
                                  borderRadius: '0.5rem',
                                  padding: '0.5rem 0.75rem',
                                  textDecoration: 'none',
                                  transition: 'background-color 0.3s',
                                  alignItems: 'flex-start',
                                  display: 'grid',
                                  gap: '0px 1rem',
                                  gridTemplateRows: 'auto',
                                  gridTemplateColumns: 'max-content 1fr',
                                  gridAutoColumns: '1fr',
                                  gridAutoFlow: 'row',
                                }}
                              >
                                <div
                                  className="uui-navbar03_icon-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    flex: '0 0 auto',
                                  }}
                                >
                                  <div
                                    className="icon-featured-large"
                                    style={{
                                      boxSizing: 'border-box',
                                      borderRadius: '5%',
                                      backgroundColor: '#ece7f5',
                                      color: '#7f56d9',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '3rem',
                                      height: '3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-icon-1x1-xsmall w-embed"
                                      style={{
                                        boxSizing: 'border-box',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '2.3rem',
                                        height: '2.3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <svg
                                        height="2rem"
                                        width="2rem"
                                        fill="none"
                                        viewBox="0 0 88 88"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <path
                                          d="M54.2132 46.9406L63.4303 43.5859C65.8258 42.714 67.061 40.0652 66.1891 37.6697C65.3172 35.2741 62.6684 34.039 60.2729 34.9109L46.9222 39.7702C42.9229 41.2258 43.3598 36.7687 40.2024 28.0937C37.045 19.4187 32.0622 16.3202 28.7683 17.5191C25.4745 18.7179 26.3544 22.6958 27.7358 26.4911C29.1171 30.2864 30.8932 35.166 30.7955 38.2716V38.2716C30.6548 42.7457 27.1853 46.313 25.4596 50.4432C23.683 54.6956 22.5826 60.955 26.2646 67.9977C31.4168 77.8523 39.5873 81.7366 48.6522 78.4372L69.6495 70.7948C72.045 69.9229 73.2802 67.2742 72.4083 64.8786C71.5364 62.4831 68.8876 61.248 66.4921 62.1199L59.9858 64.4879L69.7452 60.9358C72.1407 60.0639 73.3759 57.4151 72.504 55.0196C71.632 52.6241 68.9833 51.389 66.5877 52.2609L56.8284 55.813L69.8409 51.0768C72.2364 50.2049 73.4715 47.5561 72.5996 45.1606C71.7277 42.7651 69.079 41.5299 66.6834 42.4018L54.7553 46.7433"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M20.5877 25.4087L14.0815 27.7768"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M46.6126 15.9364L40.1063 18.3045"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M24.4269 5.591L26.7949 12.0972"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M37.6623 6.16887L34.7362 12.444"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M14.6594 14.5413L20.9344 17.4674"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-navbar03_item-right"
                                  style={{
                                    boxSizing: 'border-box',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    fontWeight: 400,
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      marginBottom: '0.25rem',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                    }}
                                  >
                                    Estado de la app
                                  </div>
                                  <div
                                    className="uui-text-size-small"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#344054',
                                      letterSpacing: 'normal',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.7rem',
                                      lineHeight: '1.1em',
                                    }}
                                  >
                                    Conoce de primera mano el estado de los
                                    servicios de Nequi.
                                  </div>
                                </div>
                              </a>
                              <a
                                className="btn-nav-nq w-inline-block"
                                href="https://www.nequi.com.co/blog"
                                tabIndex="0"
                                style={{
                                  boxSizing: 'border-box',
                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                  maxWidth: '100%',
                                  borderRadius: '0.5rem',
                                  padding: '0.5rem 0.75rem',
                                  textDecoration: 'none',
                                  transition: 'background-color 0.3s',
                                  alignItems: 'flex-start',
                                  display: 'grid',
                                  gap: '0px 1rem',
                                  gridTemplateRows: 'auto',
                                  gridTemplateColumns: 'max-content 1fr',
                                  gridAutoColumns: '1fr',
                                  gridAutoFlow: 'row',
                                }}
                              >
                                <div
                                  className="uui-navbar03_icon-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    flex: '0 0 auto',
                                  }}
                                >
                                  <div
                                    className="icon-featured-large"
                                    style={{
                                      boxSizing: 'border-box',
                                      borderRadius: '5%',
                                      backgroundColor: '#ece7f5',
                                      color: '#7f56d9',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '3rem',
                                      height: '3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-icon-1x1-xsmall w-embed"
                                      style={{
                                        boxSizing: 'border-box',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '2.3rem',
                                        height: '2.3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <svg
                                        height="2rem"
                                        width="2rem"
                                        fill="none"
                                        viewBox="0 0 88 88"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <path
                                          d="M65 26.0188C65 26.0188 56 25.1634 56 35"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M72 50C72 50 68.8608 53.4063 64 52.9596"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M44 64C44 64 47.3482 55.5727 54 57.2114"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M55.016 72C55.016 72 54.2115 62.6713 64 63.009"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M51 52.0878C51 52.0878 57.6091 50.6954 62 59"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M49 38.7305C49 38.7305 58.6334 46.9884 63 32"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M61 47.9878C61 47.9878 55.52 48.6089 55 41"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M51.5 24C52.3284 24 53 23.3284 53 22.5C53 21.6716 52.3284 21 51.5 21C50.6716 21 50 21.6716 50 22.5C50 23.3284 50.6716 24 51.5 24Z"
                                          fill="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M36.5 24C37.3284 24 38 23.3284 38 22.5C38 21.6716 37.3284 21 36.5 21C35.6716 21 35 21.6716 35 22.5C35 23.3284 35.6716 24 36.5 24Z"
                                          fill="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M23 26.0188C23 26.0188 32 25.1634 32 35"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M16 50C16 50 18.7468 53.4063 23 52.9596"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M44 64C44 64 40.6518 55.5727 34 57.2114"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M33.984 72C33.984 72 34.7885 62.6713 25 63.009"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M38 52.0878C38 52.0878 31.3909 50.6954 27 59"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M40 38.7305C40 38.7305 30.3666 46.9884 26 32"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M28 47.9878C28 47.9878 34.3933 48.6089 35 41"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M37 28C37 28 44.5287 34.75 51 28"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M44 71.1845V16.6879C44 16.6879 52.3681 6.14015 59.3415 16.6879C59.3415 16.6879 66.5473 18.6656 65.6175 25.6974C65.6175 25.6974 73.9856 28.3343 70.2665 37.5636C70.2665 37.5636 77.2399 41.0795 72.126 49.8693C72.126 49.8693 76.775 54.7037 71.1963 60.417C71.1963 60.417 72.5909 70.0858 62.3633 70.5252C62.3633 70.5252 55.3899 82.3914 44 71.1845Z"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M44 71.1845V16.6879C44 16.6879 35.6319 6.14015 28.6585 16.6879C28.6585 16.6879 21.4527 18.6656 22.3825 25.6974C22.3825 25.6974 14.0144 28.3343 17.7335 37.5636C17.7335 37.5636 10.7601 41.0795 15.874 49.8693C15.874 49.8693 11.225 54.7037 16.8037 60.417C16.8037 60.417 15.4091 70.0858 25.6367 70.5252C25.6367 70.5252 32.6101 82.3914 44 71.1845Z"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeMiterlimit="10"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-navbar03_item-right"
                                  style={{
                                    boxSizing: 'border-box',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    fontWeight: 400,
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      marginBottom: '0.25rem',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                    }}
                                  >
                                    Blog
                                  </div>
                                  <div
                                    className="uui-text-size-small"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#344054',
                                      letterSpacing: 'normal',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.7rem',
                                      lineHeight: '1.1em',
                                    }}
                                  >
                                    Aquí te damos consejos súper top para que
                                    aprendas a mover la plata #ATuRitmo.
                                  </div>
                                </div>
                              </a>
                              <a
                                className="btn-nav-nq w-inline-block"
                                href="https://www.nequi.com.co/personas/ayuda/negocios-que-no-reciben-nequi"
                                tabIndex="0"
                                style={{
                                  boxSizing: 'border-box',
                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                  maxWidth: '100%',
                                  borderRadius: '0.5rem',
                                  padding: '0.5rem 0.75rem',
                                  textDecoration: 'none',
                                  transition: 'background-color 0.3s',
                                  alignItems: 'flex-start',
                                  display: 'grid',
                                  gap: '0px 1rem',
                                  gridTemplateRows: 'auto',
                                  gridTemplateColumns: 'max-content 1fr',
                                  gridAutoColumns: '1fr',
                                  gridAutoFlow: 'row',
                                }}
                              >
                                <div
                                  className="uui-navbar03_icon-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    flex: '0 0 auto',
                                  }}
                                >
                                  <div
                                    className="icon-featured-large"
                                    style={{
                                      boxSizing: 'border-box',
                                      borderRadius: '5%',
                                      backgroundColor: '#ece7f5',
                                      color: '#7f56d9',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '3rem',
                                      height: '3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-icon-1x1-xsmall w-embed"
                                      style={{
                                        boxSizing: 'border-box',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '2.3rem',
                                        height: '2.3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <svg
                                        height="2rem"
                                        width="2rem"
                                        fill="none"
                                        viewBox="0 0 88 88"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <circle
                                          cx="44"
                                          cy="44"
                                          r="36"
                                          stroke="#200020"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <circle
                                          cx="44"
                                          cy="44"
                                          r="29.5"
                                          stroke="#200020"
                                          strokeDasharray="8 4"
                                          strokeLinecap="round"
                                          strokeLinejoin="bevel"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M56 58C56 58 53 52 44 52C35 52 32 58 32 58"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <circle
                                          cx="36.5"
                                          cy="40.5"
                                          fill="#DA0081"
                                          r="2"
                                          stroke="#DA0081"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <circle
                                          cx="51.5"
                                          cy="40.5"
                                          fill="#DA0081"
                                          r="2"
                                          stroke="#DA0081"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M53 47.5C53 48.6046 52.3284 49 51.5 49C50.6716 49 50 48.6046 50 47.5C50 46.3954 51.5 45 51.5 45C51.5 45 53 46.3954 53 47.5Z"
                                          stroke="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-navbar03_item-right"
                                  style={{
                                    boxSizing: 'border-box',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    fontWeight: 400,
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      marginBottom: '0.25rem',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                    }}
                                  >
                                    ¿No te recibieron un pago Nequi?
                                  </div>
                                  <div
                                    className="uui-text-size-small"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#344054',
                                      letterSpacing: 'normal',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.7rem',
                                      lineHeight: '1.1em',
                                    }}
                                  >
                                    Cuéntanos aquí y te ayudamos a solucionar de
                                    una.
                                  </div>
                                </div>
                              </a>
                              <a
                                className="btn-nav-nq w-inline-block"
                                href="https://www.nequi.com.co/personas/ayuda/corresponsales"
                                tabIndex="0"
                                style={{
                                  boxSizing: 'border-box',
                                  backgroundColor: 'rgba(0, 0, 0, 0)',
                                  maxWidth: '100%',
                                  borderRadius: '0.5rem',
                                  padding: '0.5rem 0.75rem',
                                  textDecoration: 'none',
                                  transition: 'background-color 0.3s',
                                  alignItems: 'flex-start',
                                  display: 'grid',
                                  gap: '0px 1rem',
                                  gridTemplateRows: 'auto',
                                  gridTemplateColumns: 'max-content 1fr',
                                  gridAutoColumns: '1fr',
                                  gridAutoFlow: 'row',
                                }}
                              >
                                <div
                                  className="uui-navbar03_icon-wrapper"
                                  style={{
                                    boxSizing: 'border-box',
                                    flex: '0 0 auto',
                                  }}
                                >
                                  <div
                                    className="icon-featured-large"
                                    style={{
                                      boxSizing: 'border-box',
                                      borderRadius: '5%',
                                      backgroundColor: '#ece7f5',
                                      color: '#7f56d9',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '3rem',
                                      height: '3rem',
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-icon-1x1-xsmall w-embed"
                                      style={{
                                        boxSizing: 'border-box',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '2.3rem',
                                        height: '2.3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <svg
                                        height="2rem"
                                        width="2rem"
                                        fill="none"
                                        viewBox="0 0 200 200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          boxSizing: 'border-box',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <path
                                          d="M134.41 55.64C135.85 53.04 134.91 49.76 132.31 48.32C134.91 49.76 138.19 48.82 139.63 46.22C138.19 48.82 139.13 52.1 141.73 53.54C139.13 52.1 135.85 53.04 134.41 55.64Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M164.51 149.94C145.8 138.98 139.9 129.91 138.33 126.85C138.36 126.63 138.39 126.41 138.41 126.19C138.52 125.02 138.43 122.62 138.34 121.42"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M87.35 142.66C88.84 144.89 91.57 148.06 93.28 149.21C95.83 150.93 95.86 151.51 99.63 153.19C99.91 153.32 100.2 153.43 100.48 153.54C107.78 160.46 116.42 166.76 125.75 172.45"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M121.88 110.09L111.04 103.99L111.01 104.04L112.98 105.42C115.96 107.5 116.68 111.59 114.61 114.57C113.24 116.53 111 117.51 108.77 117.36C109.59 119.19 109.56 121.36 108.52 123.24C107.32 125.41 105.07 126.62 102.75 126.62C103.8 128.45 103.96 130.75 102.96 132.79C102.08 134.6 100.47 135.81 98.6699 136.27C99.6199 137.9 99.7599 139.96 98.8699 141.78C98.8299 141.87 98.7799 141.95 98.7399 142.04C99.0299 142.27 99.3399 142.48 99.6599 142.68C104.7 145.81 111.33 144.27 114.46 139.22L123.74 124.28C124 119.75 123.05 114.55 121.88 110.09Z"
                                          fill="#ECE7F5"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M138.34 121.42C138.34 121.42 137.81 109.03 129.5 99.65C128.16 98.14 126.08 97.52 124.12 98.03C121.11 98.81 119.4 101.97 120.36 104.92C122.2 110.53 124.52 119.4 123.56 126.15"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M124.12 98.04C124.18 98.02 124.25 98.01 124.31 98C124.3 98 124.29 98 124.27 98L110.42 90.21L108.04 94.44C106.19 97.74 107.35 101.91 110.65 103.77L121.88 110.09C121.39 108.2 120.85 106.44 120.36 104.93C119.39 101.98 121.11 98.82 124.12 98.04Z"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M125.75 97.87C125.64 97.87 125.53 97.87 125.43 97.87C125.54 97.87 125.65 97.87 125.75 97.87Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M124.62 97.93C124.62 97.93 124.66 97.93 124.68 97.93C124.66 97.93 124.64 97.93 124.62 97.93Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M124.99 97.89C125.11 97.88 125.23 97.87 125.35 97.87"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M150.13 85L120.93 68.57C120.91 69.16 120.75 69.75 120.44 70.29L110.45 88.05C110.11 88.65 109.63 89.12 109.08 89.45L124.28 98C126.19 97.56 128.2 98.18 129.5 99.65C130.18 100.41 130.8 101.19 131.38 101.99L138.37 105.92C142.93 108.49 148.71 106.87 151.27 102.31L153.76 97.89C156.33 93.33 154.71 87.55 150.15 84.99L150.13 85Z"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M130.01 100.26C130.21 100.49 130.4 100.73 130.59 100.97C130.4 100.73 130.21 100.5 130.01 100.26Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M131.14 101.68C131 101.49 130.85 101.29 130.7 101.1"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M138.36 105.93L131.37 102C131.37 102 131.3 101.9 131.26 101.86C133.9 105.45 135.56 109.28 136.6 112.6C137.02 112.17 137.39 111.69 137.7 111.14L140.18 106.73C139.56 106.54 138.95 106.27 138.35 105.94L138.36 105.93Z"
                                          fill="#ECE7F5"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M119.23 65.21C112.96 60.97 98.8199 49.71 95.6999 32.71C94.4299 39.77 90.2899 50.25 84.0999 61.26C77.6499 72.73 70.5199 82 65.0499 86.57C81.3299 80.13 98.5399 86.45 105.49 89.64C107.31 90.48 109.47 89.79 110.46 88.04L120.45 70.28C121.43 68.53 120.9 66.33 119.24 65.2L119.23 65.21Z"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M68.0799 52.26C57.9499 70.27 53.3199 86.88 57.7399 89.37C62.1599 91.86 73.9599 79.28 84.0899 61.27C94.2199 43.26 98.8499 26.65 94.4299 24.16C90.0099 21.67 78.2099 34.25 68.0799 52.26Z"
                                          fill="#ECE7F5"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M73.7999 55.39C70.4899 61.28 68.7899 66.61 70.0099 67.3C71.2299 67.99 74.9099 63.77 78.2199 57.88C81.5299 51.99 83.2299 46.66 82.0099 45.97C80.7899 45.28 77.1099 49.5 73.7999 55.39Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M66.51 36.93L65.93 31.9C65.78 30.6 64.64 29.64 63.33 29.72L60.4 29.89L58.78 22.32C58.6 21.46 57.38 21.46 57.19 22.32L55.29 30.79C54.93 32.39 56.21 33.89 57.84 33.79L61.84 33.55L65.06 37.54C65.57 38.18 66.6 37.75 66.51 36.93Z"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M54.15 58.16L49.77 55.61C48.64 54.95 47.19 55.29 46.47 56.38L44.85 58.83L37.82 55.59C37.02 55.22 36.29 56.2 36.86 56.86L42.51 63.46C43.58 64.71 45.54 64.58 46.45 63.21L48.65 59.86L53.77 59.67C54.59 59.64 54.86 58.56 54.15 58.15"
                                          stroke="#200020"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M58.04 46.69L55.05 42.49C54.17 41.25 52.52 40.81 51.13 41.44L48.02 42.86L45.97 38.2C45.32 36.73 43.67 35.97 42.13 36.44L35.28 38.52C34.62 38.72 34.7 39.68 35.38 39.76L41.46 40.53L44.74 46.35C45.51 47.72 47.16 48.32 48.63 47.77L53.18 46.06L57.28 47.65C57.87 47.88 58.4 47.2 58.03 46.69"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M112.99 105.41L107.26 101.41C104.28 99.33 100.19 100.06 98.11 103.04C96.58 105.23 96.57 108.03 97.87 110.18C98.56 110.31 99.23 110.54 99.88 110.9L105.98 114.3C107.27 115.02 108.22 116.1 108.78 117.35C111 117.5 113.25 116.52 114.62 114.56C116.7 111.58 115.97 107.49 112.99 105.41Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M93.4899 122.39L99.5899 125.79C102.76 127.55 106.76 126.41 108.52 123.24C110.28 120.07 109.14 116.07 105.97 114.31L99.8699 110.91C96.6999 109.15 92.6999 110.29 90.9399 113.46C89.1799 116.63 90.3199 120.63 93.4899 122.39Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M99.5899 125.78L93.4899 122.38C92.5299 121.85 91.7699 121.11 91.1999 120.26C88.6299 120.1 86.0899 121.47 84.8899 123.93C83.2999 127.19 84.6499 131.12 87.8999 132.72L94.1699 135.79C97.4299 137.38 101.36 136.03 102.96 132.78C103.96 130.74 103.8 128.44 102.75 126.61C101.68 126.61 100.59 126.34 99.5799 125.78H99.5899Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M94.1799 135.79L87.9099 132.72C87.0599 132.3 86.3399 131.73 85.7699 131.05C84.4999 131.58 83.4099 132.55 82.7499 133.88C81.3299 136.79 82.5299 140.29 85.4399 141.71L91.0299 144.45C93.9399 145.87 97.4399 144.67 98.8599 141.76C99.7499 139.94 99.6099 137.88 98.6599 136.25C97.2099 136.62 95.6199 136.49 94.1699 135.78L94.1799 135.79Z"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M147.97 83.78L120.93 68.57C120.91 69.16 120.75 69.75 120.44 70.29L110.45 88.05C110.11 88.65 109.63 89.12 109.08 89.45L124.28 98C126.19 97.56 128.2 98.18 129.5 99.65C130.18 100.41 130.8 101.19 131.38 101.99L138.37 105.92C142.93 108.49 148.71 106.87 151.27 102.31"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M138.34 121.42C138.34 121.42 137.81 109.03 129.5 99.65C128.16 98.14 126.08 97.52 124.12 98.03C121.11 98.81 119.4 101.97 120.36 104.92C122.2 110.53 124.52 119.4 123.56 126.15C123.56 126.15 125.68 131.68 122.68 131.68C118.77 131.68 123.68 125.68 123.68 125.68"
                                          stroke="#DA0081"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M87.2999 55.27C95.1599 39.7 98.3699 26.36 94.4399 24.15C90.0199 21.66 78.2199 34.24 68.0899 52.25C57.9599 70.26 53.3299 86.87 57.7499 89.36C60.6999 91.02 66.9299 85.98 73.7499 77.09"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M95.6999 32.72C94.4299 39.78 90.2899 50.26 84.0999 61.27C77.6499 72.74 70.5199 82.01 65.0499 86.58"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M93.8099 85.55C98.7699 86.79 102.86 88.45 105.48 89.65C107.3 90.49 109.46 89.8 110.45 88.05L120.44 70.29C121.42 68.54 120.89 66.34 119.23 65.21C112.96 60.97 98.8199 49.71 95.6999 32.71"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M65.0399 86.58C69.0099 85.01 73.0399 84.2 76.9599 83.91"
                                          stroke="#200020"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M73.71 113.59L72.57 112.94C72.41 112.85 72.36 112.65 72.45 112.49L72.86 111.76L76.95 104.57L77.4 103.78C77.49 103.62 77.69 103.57 77.85 103.66L78.99 104.31C79.15 104.4 79.2 104.6 79.11 104.76L78.66 105.55L74.57 112.74L74.16 113.47C74.07 113.63 73.87 113.68 73.71 113.59Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M78.8299 109.612L78.1816 110.75C78.0914 110.909 78.1467 111.11 78.3051 111.2L79.652 111.967C79.8104 112.058 80.0119 112.002 80.1021 111.844L80.7503 110.706C80.8405 110.547 80.7852 110.346 80.6268 110.255L79.2799 109.488C79.1216 109.398 78.9201 109.454 78.8299 109.612Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M77.21 110.2L77.86 109.06C77.95 108.9 77.89 108.7 77.74 108.61L76.93 108.15L72.71 105.75L71.92 105.3C71.76 105.21 71.56 105.27 71.47 105.42L70.82 106.56C70.73 106.72 70.79 106.92 70.94 107.01L71.73 107.46L75.95 109.86L76.76 110.32C76.92 110.41 77.12 110.35 77.21 110.2Z"
                                          fill="#2B0D2B"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                        <path
                                          d="M153.644 100.3L151.652 99.2762C151.465 99.1803 151.236 99.2539 151.14 99.4405L150.573 100.543C150.477 100.73 150.551 100.959 150.738 101.055L152.73 102.079C152.916 102.175 153.146 102.101 153.241 101.915L153.808 100.812C153.904 100.625 153.831 100.396 153.644 100.3Z"
                                          fill="#200020"
                                          style={{ boxSizing: 'border-box' }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="uui-navbar03_item-right"
                                  style={{
                                    boxSizing: 'border-box',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    fontWeight: 400,
                                    display: 'flex',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_item-heading"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#101828',
                                      marginBottom: '0.25rem',
                                      fontFamily: 'Manrope, sans-serif',
                                      fontWeight: 600,
                                    }}
                                  >
                                    ¿Un Corresponsal te cobró al usar Nequi?
                                  </div>
                                  <div
                                    className="uui-text-size-small"
                                    style={{
                                      boxSizing: 'border-box',
                                      color: '#344054',
                                      letterSpacing: 'normal',
                                      fontFamily:
                                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                      fontSize: '0.7rem',
                                      lineHeight: '1.1em',
                                    }}
                                  >
                                    Si te cobraron, porfa llena este formulario
                                    para que podamos tomar medidas.
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="uui-navbar03_dropdown-content none-nav"
                            style={{
                              boxSizing: 'border-box',
                              width: '100%',
                              display: 'none',
                            }}
                          >
                            <div
                              className="uui-navbar03_dropdown-content-left"
                              style={{
                                boxSizing: 'border-box',
                                gap: '0px 1.5rem',
                                flex: '1 1 0%',
                                gridTemplateRows: 'auto',
                                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                gridAutoColumns: '1fr',
                                paddingTop: '2rem',
                                paddingBottom: '2rem',
                                paddingLeft: '0px',
                                display: 'grid',
                              }}
                            >
                              <div
                                className="uui-navbar03_dropdown-link-list"
                                style={{
                                  boxSizing: 'border-box',
                                  gap: '0.1rem 0px',
                                  gridTemplate:
                                    '"." min-content "." max-content "." min-content "Area" "." "." "." / 1fr',
                                  gridAutoColumns: '1fr',
                                  display: 'grid',
                                  gridTemplateRows:
                                    'min-content max-content min-content auto auto auto auto',
                                }}
                              >
                                <a
                                  className="btn-nav-nq w-inline-block"
                                  href="https://ayuda.nequi.com.co/hc/es?_ga=2.79334294.388375731.1729516481-56085136.1724765253"
                                  tabIndex="0"
                                  style={{
                                    boxSizing: 'border-box',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    maxWidth: '100%',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0.75rem',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s',
                                    alignItems: 'flex-start',
                                    display: 'grid',
                                    gap: '0px 1rem',
                                    gridTemplateRows: 'auto',
                                    gridTemplateColumns: 'max-content 1fr',
                                    gridAutoColumns: '1fr',
                                    gridAutoFlow: 'row',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_icon-wrapper"
                                    style={{
                                      boxSizing: 'border-box',
                                      flex: '0 0 auto',
                                    }}
                                  >
                                    <div
                                      className="icon-featured-large"
                                      style={{
                                        boxSizing: 'border-box',
                                        borderRadius: '5%',
                                        backgroundColor: '#ece7f5',
                                        color: '#7f56d9',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '3rem',
                                        height: '3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <div
                                        className="uui-icon-1x1-xsmall w-embed"
                                        style={{
                                          boxSizing: 'border-box',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '2.3rem',
                                          height: '2.3rem',
                                          display: 'flex',
                                        }}
                                      >
                                        <svg
                                          height="2rem"
                                          width="2rem"
                                          fill="none"
                                          viewBox="0 0 200 200"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            boxSizing: 'border-box',
                                            overflow: 'hidden',
                                          }}
                                        >
                                          <path
                                            d="M40.09 81.04L38.95 80.39C38.79 80.3 38.74 80.1 38.83 79.94L39.24 79.21L46.66 66.18L47.11 65.39C47.2 65.23 47.4 65.18 47.56 65.27L48.7 65.92C48.86 66.01 48.91 66.21 48.82 66.37L48.37 67.16L40.95 80.19L40.54 80.92C40.45 81.08 40.25 81.13 40.09 81.04Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M49.7942 75.7874L49.146 76.9257C49.0558 77.0841 49.1111 77.2856 49.2694 77.3758L50.6163 78.1428C50.7747 78.233 50.9762 78.1777 51.0664 78.0194L51.7147 76.881C51.8049 76.7226 51.7496 76.5211 51.5912 76.4309L50.2443 75.6639C50.0859 75.5737 49.8844 75.629 49.7942 75.7874Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M48.18 76.39L48.83 75.25C48.92 75.09 48.86 74.89 48.71 74.8L47.9 74.34L37.84 68.61L37.05 68.16C36.89 68.07 36.69 68.13 36.6 68.28L35.95 69.42C35.86 69.58 35.92 69.78 36.07 69.87L36.86 70.32L46.92 76.05L47.73 76.51C47.89 76.6 48.09 76.54 48.18 76.39Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M152.06 171.27C150.54 163.3 142.85 158.08 134.88 159.59C142.85 158.07 148.07 150.38 146.56 142.41C148.08 150.38 155.77 155.6 163.74 154.09C155.77 155.61 150.55 163.3 152.06 171.27Z"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M116.56 44.08C118.91 39.84 117.38 34.5 113.14 32.15C117.38 34.5 122.72 32.97 125.07 28.73C122.72 32.97 124.25 38.31 128.49 40.66C124.25 38.31 118.91 39.84 116.56 44.08Z"
                                            stroke="#D90080"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M117.47 118.89C117.47 116.3 117.77 113.7 118.38 111.1C118.99 108.51 119.9 106.15 121.12 104.02C122.1 102.02 123.17 100.43 124.33 99.27C125.49 98.11 126.83 96.92 128.34 95.7C129.85 94.48 131.65 92.77 133.74 90.57C135.35 88.8 136.42 87.06 136.95 85.35C137.48 83.64 137.75 81.76 137.75 79.72C137.75 78.66 137.64 77.64 137.43 76.65C137.21 75.67 136.81 74.8 136.22 74.06C135.28 72.76 134.03 71.83 132.47 71.26C130.92 70.69 129.25 70.41 127.49 70.41C126.15 70.41 124.84 70.57 123.57 70.88C122.29 71.2 121.2 71.71 120.3 72.41C119.2 73.24 118.38 74.28 117.85 75.54C117.32 76.8 117.07 78.19 117.11 79.73H100.12C100.59 75.52 101.79 71.67 103.72 68.17C105.65 64.67 108.14 61.92 111.21 59.91C113.45 58.42 115.93 57.28 118.64 56.49C121.35 55.7 124.07 55.31 126.78 55.31C131.26 55.31 135.49 56.01 139.46 57.4C143.43 58.8 146.71 61.09 149.31 64.27C151.04 66.28 152.38 68.61 153.32 71.26C154.26 73.91 154.73 76.58 154.73 79.25C154.73 83.54 153.77 87.43 151.84 90.93C149.91 94.43 147.53 97.69 144.7 100.72C143.48 102.02 142.39 103.15 141.43 104.11C140.47 105.07 139.6 105.98 138.84 106.82C138.08 107.66 137.39 108.54 136.8 109.44C135.7 111.25 135.03 112.72 134.8 113.86C134.57 115 134.45 116.67 134.45 118.87H117.47V118.89Z"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M134.46 124.9H117.59V141.88H134.46V124.9Z"
                                            fill="#DA0081"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M126.03 141.89H117.59V124.9H134.46V132.96"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M126.03 118.89H117.48C117.48 116.3 117.78 113.7 118.39 111.1C119 108.51 119.91 106.15 121.13 104.02C122.11 102.02 123.18 100.43 124.34 99.27C125.5 98.11 126.84 96.92 128.35 95.7C129.86 94.48 131.66 92.77 133.75 90.57C135.36 88.8 136.43 87.06 136.96 85.35C137.49 83.64 137.76 81.76 137.76 79.72C137.76 78.66 137.65 77.64 137.44 76.65C137.22 75.67 136.82 74.8 136.23 74.06C135.29 72.76 134.04 71.83 132.48 71.26C130.93 70.69 129.26 70.41 127.5 70.41C126.16 70.41 124.85 70.57 123.58 70.88C122.3 71.2 121.21 71.71 120.31 72.41C119.21 73.24 118.39 74.28 117.86 75.54C117.33 76.8 117.08 78.19 117.12 79.73H100.13C100.6 75.52 101.8 71.67 103.73 68.17C105.66 64.67 108.15 61.92 111.22 59.91C113.46 58.42 115.94 57.28 118.65 56.49C121.36 55.7 124.08 55.31 126.79 55.31C131.27 55.31 135.5 56.01 139.47 57.4C143.44 58.8 146.72 61.09 149.32 64.27C151.05 66.28 152.39 68.61 153.33 71.26C154.27 73.91 154.74 76.58 154.74 79.25C154.74 83.54 153.78 87.43 151.85 90.93C151.17 92.17 150.43 93.37 149.64 94.55"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M126.03 118.89H117.48C117.48 116.3 117.78 113.7 118.39 111.1C119 108.51 119.91 106.15 121.13 104.02C122.11 102.02 123.18 100.43 124.34 99.27C125.5 98.11 126.84 96.92 128.35 95.7C129.86 94.48 131.66 92.77 133.75 90.57C135.36 88.8 136.43 87.06 136.96 85.35C137.49 83.64 137.76 81.76 137.76 79.72C137.76 78.66 137.65 77.64 137.44 76.65C137.22 75.67 136.82 74.8 136.23 74.06C135.29 72.76 134.04 71.83 132.48 71.26C130.93 70.69 129.26 70.41 127.5 70.41C126.16 70.41 124.85 70.57 123.58 70.88C122.3 71.2 121.21 71.71 120.31 72.41C119.21 73.24 118.39 74.28 117.86 75.54C117.33 76.8 117.08 78.19 117.12 79.73H100.13C100.6 75.52 101.8 71.67 103.73 68.17C105.66 64.67 108.15 61.92 111.22 59.91C113.46 58.42 115.94 57.28 118.65 56.49C121.36 55.7 124.08 55.31 126.79 55.31C131.27 55.31 135.5 56.01 139.47 57.4C143.44 58.8 146.72 61.09 149.32 64.27C151.05 66.28 152.39 68.61 153.33 71.26C154.27 73.91 154.74 76.58 154.74 79.25C154.74 83.54 153.78 87.43 151.85 90.93C151.17 92.17 150.43 93.37 149.64 94.55"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M134.49 140.25H132.81C132.578 140.25 132.39 140.438 132.39 140.67V142.35C132.39 142.582 132.578 142.77 132.81 142.77H134.49C134.722 142.77 134.91 142.582 134.91 142.35V140.67C134.91 140.438 134.722 140.25 134.49 140.25Z"
                                            fill="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M88.3201 79.19C88.3201 81.78 88.0201 84.38 87.4101 86.98C86.8001 89.57 85.8901 91.93 84.6701 94.06C83.6901 96.06 82.6201 97.65 81.4601 98.81C80.3001 99.97 78.9601 101.16 77.4501 102.38C75.9401 103.6 74.1401 105.31 72.0501 107.51C70.4401 109.28 69.3701 111.02 68.8401 112.73C68.3101 114.44 68.0401 116.32 68.0401 118.36C68.0401 119.42 68.1501 120.44 68.3601 121.43C68.5801 122.41 68.9801 123.28 69.5701 124.02C70.5101 125.32 71.7601 126.25 73.3201 126.82C74.8701 127.39 76.5401 127.67 78.3001 127.67C79.6401 127.67 80.9501 127.51 82.2201 127.2C83.5001 126.88 84.5901 126.37 85.4901 125.67C86.5901 124.84 87.4101 123.8 87.9401 122.54C88.4701 121.28 88.7201 119.89 88.6801 118.35H105.67C105.2 122.56 104 126.41 102.07 129.91C100.14 133.41 97.6501 136.16 94.5801 138.17C92.3401 139.66 89.8601 140.8 87.1501 141.59C84.4401 142.38 81.7201 142.77 79.0101 142.77C74.5301 142.77 70.3001 142.07 66.3301 140.68C62.3601 139.28 59.0801 136.99 56.4801 133.81C54.7501 131.8 53.4101 129.47 52.4701 126.82C51.5301 124.17 51.0601 121.5 51.0601 118.83C51.0601 114.54 52.0201 110.65 53.9501 107.15C55.8801 103.65 58.2601 100.39 61.0901 97.36C62.3101 96.06 63.4001 94.93 64.3601 93.97C65.3201 93.01 66.1901 92.1 66.9501 91.26C67.7101 90.42 68.4001 89.54 68.9901 88.64C70.0901 86.83 70.7601 85.36 70.9901 84.22C71.2201 83.08 71.3401 81.41 71.3401 79.21H88.3201V79.19Z"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M88.2101 56.19H71.3401V73.17H88.2101V56.19Z"
                                            fill="#DA0081"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M79.7701 56.19H88.2001V73.18H71.3401V65.12"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M79.7701 79.19H88.3201C88.3201 81.78 88.0201 84.38 87.4101 86.98C86.8001 89.57 85.8901 91.93 84.6701 94.06C83.6901 96.06 82.6201 97.65 81.4601 98.81C80.3001 99.97 78.9601 101.16 77.4501 102.38C75.9401 103.6 74.1401 105.31 72.0501 107.51C70.4401 109.28 69.3701 111.02 68.8401 112.73C68.3101 114.44 68.0401 116.32 68.0401 118.36C68.0401 119.42 68.1501 120.44 68.3601 121.43C68.5801 122.41 68.9801 123.28 69.5701 124.02C70.5101 125.32 71.7601 126.25 73.3201 126.82C74.8701 127.39 76.5401 127.67 78.3001 127.67C79.6401 127.67 80.9501 127.51 82.2201 127.2C83.5001 126.88 84.5901 126.37 85.4901 125.67C86.5901 124.84 87.4101 123.8 87.9401 122.54C88.4701 121.28 88.7201 119.89 88.6801 118.35H105.67C105.2 122.56 104 126.41 102.07 129.91C100.14 133.41 97.6501 136.16 94.5801 138.17C92.3401 139.66 89.8601 140.8 87.1501 141.59C84.4401 142.38 81.7201 142.77 79.0101 142.77C74.5301 142.77 70.3001 142.07 66.3301 140.68C62.3601 139.28 59.0801 136.99 56.4801 133.81C54.7501 131.8 53.4101 129.47 52.4701 126.82C51.5301 124.17 51.0601 121.5 51.0601 118.83C51.0601 114.54 52.0201 110.65 53.9501 107.15C54.6301 105.91 55.3701 104.71 56.1601 103.53"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M79.7701 79.19H88.3201C88.3201 81.78 88.0201 84.38 87.4101 86.98C86.8001 89.57 85.8901 91.93 84.6701 94.06C83.6901 96.06 82.6201 97.65 81.4601 98.81C80.3001 99.97 78.9601 101.16 77.4501 102.38C75.9401 103.6 74.1401 105.31 72.0501 107.51C70.4401 109.28 69.3701 111.02 68.8401 112.73C68.3101 114.44 68.0401 116.32 68.0401 118.36C68.0401 119.42 68.1501 120.44 68.3601 121.43C68.5801 122.41 68.9801 123.28 69.5701 124.02C70.5101 125.32 71.7601 126.25 73.3201 126.82C74.8701 127.39 76.5401 127.67 78.3001 127.67C79.6401 127.67 80.9501 127.51 82.2201 127.2C83.5001 126.88 84.5901 126.37 85.4901 125.67C86.5901 124.84 87.4101 123.8 87.9401 122.54C88.4701 121.28 88.7201 119.89 88.6801 118.35H105.67C105.2 122.56 104 126.41 102.07 129.91C100.14 133.41 97.6501 136.16 94.5801 138.17C92.3401 139.66 89.8601 140.8 87.1501 141.59C84.4401 142.38 81.7201 142.77 79.0101 142.77C74.5301 142.77 70.3001 142.07 66.3301 140.68C62.3601 139.28 59.0801 136.99 56.4801 133.81C54.7501 131.8 53.4101 129.47 52.4701 126.82C51.5301 124.17 51.0601 121.5 51.0601 118.83C51.0601 114.54 52.0201 110.65 53.9501 107.15C54.6301 105.91 55.3701 104.71 56.1601 103.53"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M71.31 57.83H72.99C73.222 57.83 73.41 57.642 73.41 57.41V55.73C73.41 55.498 73.222 55.31 72.99 55.31H71.31C71.0781 55.31 70.89 55.498 70.89 55.73V57.41C70.89 57.642 71.0781 57.83 71.31 57.83Z"
                                            fill="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M148.32 94.76C148.97 94.51 149.69 94.98 149.73 95.67C149.9 98.84 147.31 105.22 143.89 102.79C140.77 100.58 145.23 95.96 148.33 94.76H148.32Z"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="uui-navbar03_item-right"
                                    style={{
                                      boxSizing: 'border-box',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignItems: 'flex-start',
                                      fontWeight: 400,
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-navbar03_item-heading"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#101828',
                                        marginBottom: '0.25rem',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      Centro de Ayuda
                                    </div>
                                    <div
                                      className="uui-text-size-small"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#344054',
                                        letterSpacing: 'normal',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: '0.7rem',
                                        lineHeight: '1.1em',
                                      }}
                                    >
                                      ¿Necesitas hacer algo en Nequi y no sabes
                                      cómo? Aquí te explicamos paso a paso.
                                    </div>
                                  </div>
                                </a>
                                <a
                                  className="btn-nav-nq w-inline-block"
                                  href="https://www.nequi.com.co/personas/ayuda/tips-de-seguridad"
                                  tabIndex="0"
                                  style={{
                                    boxSizing: 'border-box',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    maxWidth: '100%',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0.75rem',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s',
                                    alignItems: 'flex-start',
                                    display: 'grid',
                                    gap: '0px 1rem',
                                    gridTemplateRows: 'auto',
                                    gridTemplateColumns: 'max-content 1fr',
                                    gridAutoColumns: '1fr',
                                    gridAutoFlow: 'row',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_icon-wrapper"
                                    style={{
                                      boxSizing: 'border-box',
                                      flex: '0 0 auto',
                                    }}
                                  >
                                    <div
                                      className="icon-featured-large"
                                      style={{
                                        boxSizing: 'border-box',
                                        borderRadius: '5%',
                                        backgroundColor: '#ece7f5',
                                        color: '#7f56d9',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '3rem',
                                        height: '3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <div
                                        className="uui-icon-1x1-xsmall w-embed"
                                        style={{
                                          boxSizing: 'border-box',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '2.3rem',
                                          height: '2.3rem',
                                          display: 'flex',
                                        }}
                                      >
                                        <svg
                                          height="2rem"
                                          width="2rem"
                                          fill="none"
                                          viewBox="0 0 91 91"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            boxSizing: 'border-box',
                                            overflow: 'hidden',
                                          }}
                                        >
                                          <path
                                            d="M22.3031 29.2575L21.4498 28.7709C21.33 28.7036 21.2926 28.5539 21.3599 28.4341L21.6668 27.8877L24.8331 22.3261L25.1699 21.7348C25.2373 21.615 25.387 21.5776 25.5068 21.645L26.3601 22.1315C26.4798 22.1989 26.5173 22.3486 26.4499 22.4683L26.1131 23.0597L22.9468 28.6212L22.6399 29.1677C22.5725 29.2874 22.4228 29.3248 22.3031 29.2575Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M25.7878 27.0927L26.273 26.2406C26.3397 26.1235 26.4928 26.0815 26.6099 26.1482L27.6181 26.7224C27.7352 26.789 27.7772 26.9422 27.7105 27.0592L27.2253 27.9113C27.1586 28.0284 27.0055 28.0704 26.8884 28.0037L25.8802 27.4296C25.7631 27.3629 25.7211 27.2098 25.7878 27.0927Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M25.0727 26.6825L25.5592 25.8292C25.6266 25.7094 25.5817 25.5597 25.4694 25.4924L24.8631 25.148L21.5172 23.2468L20.9258 22.9099C20.8061 22.8426 20.6564 22.8875 20.589 22.9998L20.1025 23.8531C20.0351 23.9729 20.08 24.1226 20.1923 24.1899L20.7836 24.5268L24.1295 26.428L24.7358 26.7723C24.8556 26.8397 25.0053 26.7948 25.0727 26.6825Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M74.3181 75.5464C73.9064 73.3832 71.818 71.961 69.6548 72.3727C71.818 71.961 73.2402 69.8726 72.8285 67.7094C73.2402 69.8726 75.3286 71.2948 77.4919 70.8831C75.3286 71.2948 73.9064 73.3832 74.3181 75.5464Z"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.49705"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M7.98384 56.257C9.09166 54.2584 8.37308 51.7434 6.37451 50.6356C8.37308 51.7434 10.8881 51.0248 11.9959 49.0262C10.8881 51.0248 11.6067 53.5399 13.6053 54.6477C11.6067 53.5399 9.09166 54.2584 7.98384 56.257Z"
                                            stroke="#D90080"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.49705"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M24.0622 33.105H66.4438C68.098 33.105 69.4304 34.4448 69.4304 36.0916V67.1779C69.4304 68.8322 68.0905 70.1645 66.4438 70.1645H35.6943L32.1912 76.2276C31.6673 77.1333 30.3573 77.1333 29.8334 76.2276L26.3303 70.1645H24.0547C22.4005 70.1645 21.0681 68.8247 21.0681 67.1779V36.0916C21.0681 34.4374 22.408 33.105 24.0547 33.105H24.0622Z"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M58.7864 33.105H60.1487"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="1.49705"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M69.4304 43.0156V67.1855C69.4304 68.8397 68.0906 70.1721 66.4438 70.1721H35.6943L32.1912 76.2352C31.6673 77.1409 30.3573 77.1409 29.8334 76.2352L26.3303 70.1721H24.0547C22.4005 70.1721 21.0681 68.8322 21.0681 67.1855V36.0992C21.0681 34.4449 22.408 33.1125 24.0547 33.1125H58.0154"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="1.49705"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M69.7896 42.9632C69.4153 43.2102 68.8989 43.0156 68.7866 42.5814C68.2476 40.6128 69.0111 36.2564 71.4888 37.3193C73.7493 38.2849 71.5711 41.788 69.7896 42.9632Z"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.49705"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M36.9742 49.0262H32.8723C32.2026 49.0262 31.6597 49.5692 31.6597 50.2389V52.5593C31.6597 53.229 32.2026 53.7719 32.8723 53.7719H36.9742C37.6439 53.7719 38.1868 53.229 38.1868 52.5593V50.2389C38.1868 49.5692 37.6439 49.0262 36.9742 49.0262Z"
                                            fill="#DA0081"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M47.0645 49.0262H42.9626C42.2929 49.0262 41.75 49.5692 41.75 50.2389V52.5593C41.75 53.229 42.2929 53.7719 42.9626 53.7719H47.0645C47.7342 53.7719 48.2772 53.229 48.2772 52.5593V50.2389C48.2772 49.5692 47.7342 49.0262 47.0645 49.0262Z"
                                            fill="#DA0081"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M57.7459 49.0262H53.644C52.9743 49.0262 52.4314 49.5692 52.4314 50.2389V52.5593C52.4314 53.229 52.9743 53.7719 53.644 53.7719H57.7459C58.4156 53.7719 58.9585 53.229 58.9585 52.5593V50.2389C58.9585 49.5692 58.4156 49.0262 57.7459 49.0262Z"
                                            fill="#DA0081"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M84.5058 31.0392C84.5058 40.2311 77.058 47.6789 67.8661 47.6789C58.6742 47.6789 51.2263 40.2311 51.2263 31.0392C51.2263 21.8473 58.6742 14.3994 67.8661 14.3994C74.9172 14.3994 80.9503 18.7858 83.368 24.9836"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M84.5058 31.0392C84.5058 40.2311 77.058 47.6789 67.8661 47.6789C58.6742 47.6789 51.2263 40.2311 51.2263 31.0392C51.2263 21.8473 58.6742 14.3994 67.8661 14.3994C74.9172 14.3994 80.9503 18.7858 83.368 24.9836"
                                            stroke="#DA0081"
                                            strokeLinejoin="round"
                                            strokeWidth="1.49705"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M68.33 41.204C73.944 41.204 78.495 36.653 78.495 31.039C78.495 25.425 73.944 20.874 68.33 20.874C62.7161 20.874 58.165 25.425 58.165 31.039C58.165 36.653 62.7161 41.204 68.33 41.204Z"
                                            fill="#ECE7F5"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="1.49705"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M77.1028 25.9191C75.3362 22.91 72.0801 20.8815 68.3375 20.8815C64.5949 20.8815 61.3313 22.91 59.5723 25.9191H77.1102H77.1028Z"
                                            fill="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M63.9512 35.0811C64.8344 36.5856 66.4662 37.6036 68.3375 37.6036C70.2088 37.6036 71.8406 36.5856 72.7239 35.0811H63.9587H63.9512Z"
                                            fill="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M78.2256 33.3369C78.3977 32.5959 78.495 31.8324 78.495 31.0389C78.495 30.1033 78.3603 29.205 78.1208 28.3442H58.5393C58.3073 29.205 58.165 30.1033 58.165 31.0389C58.165 31.8324 58.2623 32.5959 58.4345 33.3369H78.2181H78.2256Z"
                                            fill="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M65.4932 30.0734H61.5559C61.1797 30.0734 60.8748 30.3783 60.8748 30.7545V30.9267C60.8748 31.3029 61.1797 31.6078 61.5559 31.6078H65.4932C65.8694 31.6078 66.1743 31.3029 66.1743 30.9267V30.7545C66.1743 30.3783 65.8694 30.0734 65.4932 30.0734Z"
                                            fill="white"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M74.6401 30.0734H70.7029C70.3267 30.0734 70.0217 30.3783 70.0217 30.7545V30.9267C70.0217 31.3029 70.3267 31.6078 70.7029 31.6078H74.6401C75.0163 31.6078 75.3213 31.3029 75.3213 30.9267V30.7545C75.3213 30.3783 75.0163 30.0734 74.6401 30.0734Z"
                                            fill="white"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="uui-navbar03_item-right"
                                    style={{
                                      boxSizing: 'border-box',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignItems: 'flex-start',
                                      fontWeight: 400,
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-navbar03_item-heading"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#101828',
                                        marginBottom: '0.25rem',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      Tips de seguridad
                                    </div>
                                    <div
                                      className="uui-text-size-small"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#344054',
                                        letterSpacing: 'normal',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: '0.7rem',
                                        lineHeight: '1.1em',
                                      }}
                                    >
                                      ¡Pilas con dar papaya! Te enseñamos a
                                      proteger tu plata.
                                    </div>
                                  </div>
                                </a>
                                <a
                                  className="btn-nav-nq w-inline-block"
                                  href="https://www.nequi.com.co/blog"
                                  tabIndex="0"
                                  style={{
                                    boxSizing: 'border-box',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    maxWidth: '100%',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0.75rem',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s',
                                    alignItems: 'flex-start',
                                    display: 'grid',
                                    gap: '0px 1rem',
                                    gridTemplateRows: 'auto',
                                    gridTemplateColumns: 'max-content 1fr',
                                    gridAutoColumns: '1fr',
                                    gridAutoFlow: 'row',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_icon-wrapper"
                                    style={{
                                      boxSizing: 'border-box',
                                      flex: '0 0 auto',
                                    }}
                                  >
                                    <div
                                      className="icon-featured-large"
                                      style={{
                                        boxSizing: 'border-box',
                                        borderRadius: '5%',
                                        backgroundColor: '#ece7f5',
                                        color: '#7f56d9',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '3rem',
                                        height: '3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <div
                                        className="uui-icon-1x1-xsmall w-embed"
                                        style={{
                                          boxSizing: 'border-box',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '2.3rem',
                                          height: '2.3rem',
                                          display: 'flex',
                                        }}
                                      >
                                        <svg
                                          height="2rem"
                                          width="2rem"
                                          fill="none"
                                          viewBox="0 0 88 88"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            boxSizing: 'border-box',
                                            overflow: 'hidden',
                                          }}
                                        >
                                          <path
                                            d="M65 26.0188C65 26.0188 56 25.1634 56 35"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M72 50C72 50 68.8608 53.4063 64 52.9596"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M44 64C44 64 47.3482 55.5727 54 57.2114"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M55.016 72C55.016 72 54.2115 62.6713 64 63.009"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M51 52.0878C51 52.0878 57.6091 50.6954 62 59"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M49 38.7305C49 38.7305 58.6334 46.9884 63 32"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M61 47.9878C61 47.9878 55.52 48.6089 55 41"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M51.5 24C52.3284 24 53 23.3284 53 22.5C53 21.6716 52.3284 21 51.5 21C50.6716 21 50 21.6716 50 22.5C50 23.3284 50.6716 24 51.5 24Z"
                                            fill="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M36.5 24C37.3284 24 38 23.3284 38 22.5C38 21.6716 37.3284 21 36.5 21C35.6716 21 35 21.6716 35 22.5C35 23.3284 35.6716 24 36.5 24Z"
                                            fill="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M23 26.0188C23 26.0188 32 25.1634 32 35"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M16 50C16 50 18.7468 53.4063 23 52.9596"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M44 64C44 64 40.6518 55.5727 34 57.2114"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M33.984 72C33.984 72 34.7885 62.6713 25 63.009"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M38 52.0878C38 52.0878 31.3909 50.6954 27 59"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M40 38.7305C40 38.7305 30.3666 46.9884 26 32"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M28 47.9878C28 47.9878 34.3933 48.6089 35 41"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M37 28C37 28 44.5287 34.75 51 28"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M44 71.1845V16.6879C44 16.6879 52.3681 6.14015 59.3415 16.6879C59.3415 16.6879 66.5473 18.6656 65.6175 25.6974C65.6175 25.6974 73.9856 28.3343 70.2665 37.5636C70.2665 37.5636 77.2399 41.0795 72.126 49.8693C72.126 49.8693 76.775 54.7037 71.1963 60.417C71.1963 60.417 72.5909 70.0858 62.3633 70.5252C62.3633 70.5252 55.3899 82.3914 44 71.1845Z"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M44 71.1845V16.6879C44 16.6879 35.6319 6.14015 28.6585 16.6879C28.6585 16.6879 21.4527 18.6656 22.3825 25.6974C22.3825 25.6974 14.0144 28.3343 17.7335 37.5636C17.7335 37.5636 10.7601 41.0795 15.874 49.8693C15.874 49.8693 11.225 54.7037 16.8037 60.417C16.8037 60.417 15.4091 70.0858 25.6367 70.5252C25.6367 70.5252 32.6101 82.3914 44 71.1845Z"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="uui-navbar03_item-right"
                                    style={{
                                      boxSizing: 'border-box',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignItems: 'flex-start',
                                      fontWeight: 400,
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-navbar03_item-heading"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#101828',
                                        marginBottom: '0.25rem',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      Blog
                                    </div>
                                    <div
                                      className="uui-text-size-small"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#344054',
                                        letterSpacing: 'normal',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: '0.7rem',
                                        lineHeight: '1.1em',
                                      }}
                                    >
                                      Aquí te damos consejos súper top para que
                                      aprendas a mover la plata #ATuRitmo.
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="uui-navbar03_dropdown-link-list"
                                style={{
                                  boxSizing: 'border-box',
                                  gap: '0.1rem 0px',
                                  gridTemplate:
                                    '"." min-content "." max-content "." min-content "Area" "." "." "." / 1fr',
                                  gridAutoColumns: '1fr',
                                  display: 'grid',
                                  gridTemplateRows:
                                    'min-content max-content min-content auto auto auto auto',
                                }}
                              >
                                <a
                                  className="btn-nav-nq w-inline-block"
                                  href="https://comunidad.nequi.co/?_ga=2.79334294.388375731.1729516481-56085136.1724765253"
                                  tabIndex="0"
                                  style={{
                                    boxSizing: 'border-box',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    maxWidth: '100%',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0.75rem',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s',
                                    alignItems: 'flex-start',
                                    display: 'grid',
                                    gap: '0px 1rem',
                                    gridTemplateRows: 'auto',
                                    gridTemplateColumns: 'max-content 1fr',
                                    gridAutoColumns: '1fr',
                                    gridAutoFlow: 'row',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_icon-wrapper"
                                    style={{
                                      boxSizing: 'border-box',
                                      flex: '0 0 auto',
                                    }}
                                  >
                                    <div
                                      className="icon-featured-large"
                                      style={{
                                        boxSizing: 'border-box',
                                        borderRadius: '5%',
                                        backgroundColor: '#ece7f5',
                                        color: '#7f56d9',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '3rem',
                                        height: '3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <div
                                        className="uui-icon-1x1-xsmall w-embed"
                                        style={{
                                          boxSizing: 'border-box',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '2.3rem',
                                          height: '2.3rem',
                                          display: 'flex',
                                        }}
                                      >
                                        <svg
                                          id="Capa_1"
                                          viewBox="0 0 200 200"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            boxSizing: 'border-box',
                                            overflow: 'hidden',
                                          }}
                                        >
                                          <defs
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <g
                                            style={{ boxSizing: 'border-box' }}
                                          >
                                            <path
                                              className="cls-4"
                                              d="m39.79,66.02l-1.14-.65c-.16-.09-.21-.29-.12-.45l.41-.73,5.65-9.92.45-.79c.09-.16.29-.21.45-.12l1.14.65c.16.09.21.29.12.45l-.45.79-5.65,9.92-.41.73c-.09.16-.29.21-.45.12Z"
                                              style={{
                                                boxSizing: 'border-box',
                                                fill: 'rgb(43, 13, 43)',
                                              }}
                                            />
                                            <g
                                              style={{
                                                boxSizing: 'border-box',
                                              }}
                                            >
                                              <rect
                                                className="cls-4"
                                                height="2.21"
                                                width="1.97"
                                                rx=".33"
                                                ry=".33"
                                                transform="translate(-30.28 73.03) rotate(-60.34)"
                                                x="46.69"
                                                y="61.46"
                                                style={{
                                                  boxSizing: 'border-box',
                                                  fill: 'rgb(43, 13, 43)',
                                                }}
                                              />
                                              <path
                                                className="cls-4"
                                                d="m45.43,62.04l.65-1.14c.09-.16.03-.36-.12-.45l-.81-.46-6.96-3.96-.79-.45c-.16-.09-.36-.03-.45.12l-.65,1.14c-.09.16-.03.36.12.45l.79.45,6.96,3.96.81.46c.16.09.36.03.45-.12Z"
                                                style={{
                                                  boxSizing: 'border-box',
                                                  fill: 'rgb(43, 13, 43)',
                                                }}
                                              />
                                            </g>
                                          </g>
                                          <path
                                            className="cls-5"
                                            d="m138.63,172h0c-1.21-6.33-7.32-10.48-13.65-9.28h0c6.33-1.21,10.48-7.32,9.28-13.65h0c1.21,6.33,7.32,10.48,13.65,9.28h0c-6.33,1.21-10.48,7.32-9.28,13.65Z"
                                            style={{
                                              boxSizing: 'border-box',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                              strokeWidth: '2px',
                                              stroke: 'rgb(32, 0, 32)',
                                              fill: 'none',
                                            }}
                                          />
                                          <path
                                            className="cls-6"
                                            d="m142.44,51.79h0c1.87-3.37.65-7.61-2.72-9.48h0c3.37,1.87,7.61.65,9.48-2.72h0c-1.87,3.37-.65,7.61,2.72,9.48h0c-3.37-1.87-7.61-.65-9.48,2.72Z"
                                            style={{
                                              boxSizing: 'border-box',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                              strokeWidth: '2px',
                                              fill: 'none',
                                              stroke: 'rgb(217, 0, 128)',
                                            }}
                                          />
                                          <path
                                            className="cls-2"
                                            d="m157.81,64h-71.42c-2.78,0-5.04,2.26-5.04,5.04v52.39c0,2.78,2.26,5.04,5.04,5.04h51.82l5.9,10.21c.88,1.53,3.09,1.53,3.97,0l5.9-10.21h3.83c2.78,0,5.04-2.26,5.04-5.04v-52.39c0-2.78-2.26-5.04-5.04-5.04Z"
                                            style={{
                                              boxSizing: 'border-box',
                                              fill: 'rgb(236, 231, 245)',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                              strokeWidth: '2px',
                                              stroke: 'rgb(32, 0, 32)',
                                            }}
                                          />
                                          <path
                                            className="cls-1"
                                            d="m56.19,75.17h71.42c2.78,0,5.04,2.26,5.04,5.04v52.39c0,2.78-2.26,5.04-5.04,5.04h-51.82s-5.9,10.21-5.9,10.21c-.88,1.53-3.09,1.53-3.97,0l-5.9-10.21h-3.83c-2.78,0-5.04-2.26-5.04-5.04v-52.39c0-2.78,2.26-5.04,5.04-5.04Z"
                                            style={{
                                              boxSizing: 'border-box',
                                              fill: 'rgb(236, 231, 245)',
                                            }}
                                          />
                                          <line
                                            className="cls-7"
                                            x1="114.71"
                                            x2="117"
                                            y1="75.17"
                                            y2="75.17"
                                            style={{
                                              boxSizing: 'border-box',
                                              strokeLinejoin: 'round',
                                              strokeWidth: '2px',
                                              stroke: 'rgb(32, 0, 32)',
                                              fill: 'none',
                                            }}
                                          />
                                          <path
                                            className="cls-7"
                                            d="m132.65,91.88v40.73c0,2.78-2.26,5.04-5.04,5.04h-51.82s-5.9,10.21-5.9,10.21c-.88,1.53-3.09,1.53-3.97,0l-5.9-10.21h-3.83c-2.78,0-5.04-2.26-5.04-5.04v-52.39c0-2.78,2.26-5.04,5.04-5.04h57.23"
                                            style={{
                                              boxSizing: 'border-box',
                                              strokeLinejoin: 'round',
                                              strokeWidth: '2px',
                                              stroke: 'rgb(32, 0, 32)',
                                              fill: 'none',
                                            }}
                                          />
                                          <path
                                            className="cls-5"
                                            d="m133.25,91.78c-.63.41-1.5.08-1.7-.64-.91-3.32.38-10.66,4.56-8.87,3.81,1.63.14,7.54-2.86,9.51Z"
                                            style={{
                                              boxSizing: 'border-box',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                              strokeWidth: '2px',
                                              stroke: 'rgb(32, 0, 32)',
                                              fill: 'none',
                                            }}
                                          />
                                          <g
                                            style={{ boxSizing: 'border-box' }}
                                          >
                                            <rect
                                              className="cls-3"
                                              height="8"
                                              width="11"
                                              rx="1.62"
                                              ry="1.62"
                                              x="69"
                                              y="102"
                                              style={{
                                                boxSizing: 'border-box',
                                                fill: 'rgb(218, 0, 129)',
                                              }}
                                            />
                                            <rect
                                              className="cls-3"
                                              height="8"
                                              width="11"
                                              rx="1.62"
                                              ry="1.62"
                                              x="86"
                                              y="102"
                                              style={{
                                                boxSizing: 'border-box',
                                                fill: 'rgb(218, 0, 129)',
                                              }}
                                            />
                                            <rect
                                              className="cls-3"
                                              height="8"
                                              width="11"
                                              rx="1.62"
                                              ry="1.62"
                                              x="104"
                                              y="102"
                                              style={{
                                                boxSizing: 'border-box',
                                                fill: 'rgb(218, 0, 129)',
                                              }}
                                            />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="uui-navbar03_item-right"
                                    style={{
                                      boxSizing: 'border-box',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignItems: 'flex-start',
                                      fontWeight: 400,
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-navbar03_item-heading"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#101828',
                                        marginBottom: '0.25rem',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      Comunidad Nequi
                                    </div>
                                    <div
                                      className="uui-text-size-small"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#344054',
                                        letterSpacing: 'normal',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: '0.7rem',
                                        lineHeight: '1.1em',
                                      }}
                                    >
                                      Comparte tus ideas y ayuda a otros Nequis
                                      como tú.
                                    </div>
                                  </div>
                                </a>
                                <a
                                  className="btn-nav-nq w-inline-block"
                                  href="https://www.nequi.com.co/personas/ayuda/status"
                                  tabIndex="0"
                                  style={{
                                    boxSizing: 'border-box',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    maxWidth: '100%',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0.75rem',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s',
                                    alignItems: 'flex-start',
                                    display: 'grid',
                                    gap: '0px 1rem',
                                    gridTemplateRows: 'auto',
                                    gridTemplateColumns: 'max-content 1fr',
                                    gridAutoColumns: '1fr',
                                    gridAutoFlow: 'row',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_icon-wrapper"
                                    style={{
                                      boxSizing: 'border-box',
                                      flex: '0 0 auto',
                                    }}
                                  >
                                    <div
                                      className="icon-featured-large"
                                      style={{
                                        boxSizing: 'border-box',
                                        borderRadius: '5%',
                                        backgroundColor: '#ece7f5',
                                        color: '#7f56d9',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '3rem',
                                        height: '3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <div
                                        className="uui-icon-1x1-xsmall w-embed"
                                        style={{
                                          boxSizing: 'border-box',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '2.3rem',
                                          height: '2.3rem',
                                          display: 'flex',
                                        }}
                                      >
                                        <svg
                                          height="2rem"
                                          width="2rem"
                                          fill="none"
                                          viewBox="0 0 88 88"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            boxSizing: 'border-box',
                                            overflow: 'hidden',
                                          }}
                                        >
                                          <path
                                            d="M54.2132 46.9406L63.4303 43.5859C65.8258 42.714 67.061 40.0652 66.1891 37.6697C65.3172 35.2741 62.6684 34.039 60.2729 34.9109L46.9222 39.7702C42.9229 41.2258 43.3598 36.7687 40.2024 28.0937C37.045 19.4187 32.0622 16.3202 28.7683 17.5191C25.4745 18.7179 26.3544 22.6958 27.7358 26.4911C29.1171 30.2864 30.8932 35.166 30.7955 38.2716V38.2716C30.6548 42.7457 27.1853 46.313 25.4596 50.4432C23.683 54.6956 22.5826 60.955 26.2646 67.9977C31.4168 77.8523 39.5873 81.7366 48.6522 78.4372L69.6495 70.7948C72.045 69.9229 73.2802 67.2742 72.4083 64.8786C71.5364 62.4831 68.8876 61.248 66.4921 62.1199L59.9858 64.4879L69.7452 60.9358C72.1407 60.0639 73.3759 57.4151 72.504 55.0196C71.632 52.6241 68.9833 51.389 66.5877 52.2609L56.8284 55.813L69.8409 51.0768C72.2364 50.2049 73.4715 47.5561 72.5996 45.1606C71.7277 42.7651 69.079 41.5299 66.6834 42.4018L54.7553 46.7433"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M20.5877 25.4087L14.0815 27.7768"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M46.6126 15.9364L40.1063 18.3045"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M24.4269 5.591L26.7949 12.0972"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M37.6623 6.16887L34.7362 12.444"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M14.6594 14.5413L20.9344 17.4674"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="uui-navbar03_item-right"
                                    style={{
                                      boxSizing: 'border-box',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignItems: 'flex-start',
                                      fontWeight: 400,
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-navbar03_item-heading"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#101828',
                                        marginBottom: '0.25rem',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      Estado de la app
                                    </div>
                                    <div
                                      className="uui-text-size-small"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#344054',
                                        letterSpacing: 'normal',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: '0.7rem',
                                        lineHeight: '1.1em',
                                      }}
                                    >
                                      Conoce de primera mano el estado de los
                                      servicios de Nequi.
                                    </div>
                                  </div>
                                </a>
                                <a
                                  className="btn-nav-nq w-inline-block"
                                  href="https://www.nequi.com.co/personas/ayuda/corresponsales"
                                  tabIndex="0"
                                  style={{
                                    boxSizing: 'border-box',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    maxWidth: '100%',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0.75rem',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s',
                                    alignItems: 'flex-start',
                                    display: 'grid',
                                    gap: '0px 1rem',
                                    gridTemplateRows: 'auto',
                                    gridTemplateColumns: 'max-content 1fr',
                                    gridAutoColumns: '1fr',
                                    gridAutoFlow: 'row',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_icon-wrapper"
                                    style={{
                                      boxSizing: 'border-box',
                                      flex: '0 0 auto',
                                    }}
                                  >
                                    <div
                                      className="icon-featured-large"
                                      style={{
                                        boxSizing: 'border-box',
                                        borderRadius: '5%',
                                        backgroundColor: '#ece7f5',
                                        color: '#7f56d9',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '3rem',
                                        height: '3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <div
                                        className="uui-icon-1x1-xsmall w-embed"
                                        style={{
                                          boxSizing: 'border-box',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '2.3rem',
                                          height: '2.3rem',
                                          display: 'flex',
                                        }}
                                      >
                                        <svg
                                          height="2rem"
                                          width="2rem"
                                          fill="none"
                                          viewBox="0 0 200 200"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            boxSizing: 'border-box',
                                            overflow: 'hidden',
                                          }}
                                        >
                                          <path
                                            d="M134.41 55.64C135.85 53.04 134.91 49.76 132.31 48.32C134.91 49.76 138.19 48.82 139.63 46.22C138.19 48.82 139.13 52.1 141.73 53.54C139.13 52.1 135.85 53.04 134.41 55.64Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M164.51 149.94C145.8 138.98 139.9 129.91 138.33 126.85C138.36 126.63 138.39 126.41 138.41 126.19C138.52 125.02 138.43 122.62 138.34 121.42"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M87.35 142.66C88.84 144.89 91.57 148.06 93.28 149.21C95.83 150.93 95.86 151.51 99.63 153.19C99.91 153.32 100.2 153.43 100.48 153.54C107.78 160.46 116.42 166.76 125.75 172.45"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M121.88 110.09L111.04 103.99L111.01 104.04L112.98 105.42C115.96 107.5 116.68 111.59 114.61 114.57C113.24 116.53 111 117.51 108.77 117.36C109.59 119.19 109.56 121.36 108.52 123.24C107.32 125.41 105.07 126.62 102.75 126.62C103.8 128.45 103.96 130.75 102.96 132.79C102.08 134.6 100.47 135.81 98.6699 136.27C99.6199 137.9 99.7599 139.96 98.8699 141.78C98.8299 141.87 98.7799 141.95 98.7399 142.04C99.0299 142.27 99.3399 142.48 99.6599 142.68C104.7 145.81 111.33 144.27 114.46 139.22L123.74 124.28C124 119.75 123.05 114.55 121.88 110.09Z"
                                            fill="#ECE7F5"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M138.34 121.42C138.34 121.42 137.81 109.03 129.5 99.65C128.16 98.14 126.08 97.52 124.12 98.03C121.11 98.81 119.4 101.97 120.36 104.92C122.2 110.53 124.52 119.4 123.56 126.15"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M124.12 98.04C124.18 98.02 124.25 98.01 124.31 98C124.3 98 124.29 98 124.27 98L110.42 90.21L108.04 94.44C106.19 97.74 107.35 101.91 110.65 103.77L121.88 110.09C121.39 108.2 120.85 106.44 120.36 104.93C119.39 101.98 121.11 98.82 124.12 98.04Z"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M125.75 97.87C125.64 97.87 125.53 97.87 125.43 97.87C125.54 97.87 125.65 97.87 125.75 97.87Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M124.62 97.93C124.62 97.93 124.66 97.93 124.68 97.93C124.66 97.93 124.64 97.93 124.62 97.93Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M124.99 97.89C125.11 97.88 125.23 97.87 125.35 97.87"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M150.13 85L120.93 68.57C120.91 69.16 120.75 69.75 120.44 70.29L110.45 88.05C110.11 88.65 109.63 89.12 109.08 89.45L124.28 98C126.19 97.56 128.2 98.18 129.5 99.65C130.18 100.41 130.8 101.19 131.38 101.99L138.37 105.92C142.93 108.49 148.71 106.87 151.27 102.31L153.76 97.89C156.33 93.33 154.71 87.55 150.15 84.99L150.13 85Z"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M130.01 100.26C130.21 100.49 130.4 100.73 130.59 100.97C130.4 100.73 130.21 100.5 130.01 100.26Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M131.14 101.68C131 101.49 130.85 101.29 130.7 101.1"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M138.36 105.93L131.37 102C131.37 102 131.3 101.9 131.26 101.86C133.9 105.45 135.56 109.28 136.6 112.6C137.02 112.17 137.39 111.69 137.7 111.14L140.18 106.73C139.56 106.54 138.95 106.27 138.35 105.94L138.36 105.93Z"
                                            fill="#ECE7F5"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M119.23 65.21C112.96 60.97 98.8199 49.71 95.6999 32.71C94.4299 39.77 90.2899 50.25 84.0999 61.26C77.6499 72.73 70.5199 82 65.0499 86.57C81.3299 80.13 98.5399 86.45 105.49 89.64C107.31 90.48 109.47 89.79 110.46 88.04L120.45 70.28C121.43 68.53 120.9 66.33 119.24 65.2L119.23 65.21Z"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M68.0799 52.26C57.9499 70.27 53.3199 86.88 57.7399 89.37C62.1599 91.86 73.9599 79.28 84.0899 61.27C94.2199 43.26 98.8499 26.65 94.4299 24.16C90.0099 21.67 78.2099 34.25 68.0799 52.26Z"
                                            fill="#ECE7F5"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M73.7999 55.39C70.4899 61.28 68.7899 66.61 70.0099 67.3C71.2299 67.99 74.9099 63.77 78.2199 57.88C81.5299 51.99 83.2299 46.66 82.0099 45.97C80.7899 45.28 77.1099 49.5 73.7999 55.39Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M66.51 36.93L65.93 31.9C65.78 30.6 64.64 29.64 63.33 29.72L60.4 29.89L58.78 22.32C58.6 21.46 57.38 21.46 57.19 22.32L55.29 30.79C54.93 32.39 56.21 33.89 57.84 33.79L61.84 33.55L65.06 37.54C65.57 38.18 66.6 37.75 66.51 36.93Z"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M54.15 58.16L49.77 55.61C48.64 54.95 47.19 55.29 46.47 56.38L44.85 58.83L37.82 55.59C37.02 55.22 36.29 56.2 36.86 56.86L42.51 63.46C43.58 64.71 45.54 64.58 46.45 63.21L48.65 59.86L53.77 59.67C54.59 59.64 54.86 58.56 54.15 58.15"
                                            stroke="#200020"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M58.04 46.69L55.05 42.49C54.17 41.25 52.52 40.81 51.13 41.44L48.02 42.86L45.97 38.2C45.32 36.73 43.67 35.97 42.13 36.44L35.28 38.52C34.62 38.72 34.7 39.68 35.38 39.76L41.46 40.53L44.74 46.35C45.51 47.72 47.16 48.32 48.63 47.77L53.18 46.06L57.28 47.65C57.87 47.88 58.4 47.2 58.03 46.69"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M112.99 105.41L107.26 101.41C104.28 99.33 100.19 100.06 98.11 103.04C96.58 105.23 96.57 108.03 97.87 110.18C98.56 110.31 99.23 110.54 99.88 110.9L105.98 114.3C107.27 115.02 108.22 116.1 108.78 117.35C111 117.5 113.25 116.52 114.62 114.56C116.7 111.58 115.97 107.49 112.99 105.41Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M93.4899 122.39L99.5899 125.79C102.76 127.55 106.76 126.41 108.52 123.24C110.28 120.07 109.14 116.07 105.97 114.31L99.8699 110.91C96.6999 109.15 92.6999 110.29 90.9399 113.46C89.1799 116.63 90.3199 120.63 93.4899 122.39Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M99.5899 125.78L93.4899 122.38C92.5299 121.85 91.7699 121.11 91.1999 120.26C88.6299 120.1 86.0899 121.47 84.8899 123.93C83.2999 127.19 84.6499 131.12 87.8999 132.72L94.1699 135.79C97.4299 137.38 101.36 136.03 102.96 132.78C103.96 130.74 103.8 128.44 102.75 126.61C101.68 126.61 100.59 126.34 99.5799 125.78H99.5899Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M94.1799 135.79L87.9099 132.72C87.0599 132.3 86.3399 131.73 85.7699 131.05C84.4999 131.58 83.4099 132.55 82.7499 133.88C81.3299 136.79 82.5299 140.29 85.4399 141.71L91.0299 144.45C93.9399 145.87 97.4399 144.67 98.8599 141.76C99.7499 139.94 99.6099 137.88 98.6599 136.25C97.2099 136.62 95.6199 136.49 94.1699 135.78L94.1799 135.79Z"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M147.97 83.78L120.93 68.57C120.91 69.16 120.75 69.75 120.44 70.29L110.45 88.05C110.11 88.65 109.63 89.12 109.08 89.45L124.28 98C126.19 97.56 128.2 98.18 129.5 99.65C130.18 100.41 130.8 101.19 131.38 101.99L138.37 105.92C142.93 108.49 148.71 106.87 151.27 102.31"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M138.34 121.42C138.34 121.42 137.81 109.03 129.5 99.65C128.16 98.14 126.08 97.52 124.12 98.03C121.11 98.81 119.4 101.97 120.36 104.92C122.2 110.53 124.52 119.4 123.56 126.15C123.56 126.15 125.68 131.68 122.68 131.68C118.77 131.68 123.68 125.68 123.68 125.68"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M87.2999 55.27C95.1599 39.7 98.3699 26.36 94.4399 24.15C90.0199 21.66 78.2199 34.24 68.0899 52.25C57.9599 70.26 53.3299 86.87 57.7499 89.36C60.6999 91.02 66.9299 85.98 73.7499 77.09"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M95.6999 32.72C94.4299 39.78 90.2899 50.26 84.0999 61.27C77.6499 72.74 70.5199 82.01 65.0499 86.58"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M93.8099 85.55C98.7699 86.79 102.86 88.45 105.48 89.65C107.3 90.49 109.46 89.8 110.45 88.05L120.44 70.29C121.42 68.54 120.89 66.34 119.23 65.21C112.96 60.97 98.8199 49.71 95.6999 32.71"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M65.0399 86.58C69.0099 85.01 73.0399 84.2 76.9599 83.91"
                                            stroke="#200020"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M73.71 113.59L72.57 112.94C72.41 112.85 72.36 112.65 72.45 112.49L72.86 111.76L76.95 104.57L77.4 103.78C77.49 103.62 77.69 103.57 77.85 103.66L78.99 104.31C79.15 104.4 79.2 104.6 79.11 104.76L78.66 105.55L74.57 112.74L74.16 113.47C74.07 113.63 73.87 113.68 73.71 113.59Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M78.8299 109.612L78.1816 110.75C78.0914 110.909 78.1467 111.11 78.3051 111.2L79.652 111.967C79.8104 112.058 80.0119 112.002 80.1021 111.844L80.7503 110.706C80.8405 110.547 80.7852 110.346 80.6268 110.255L79.2799 109.488C79.1216 109.398 78.9201 109.454 78.8299 109.612Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M77.21 110.2L77.86 109.06C77.95 108.9 77.89 108.7 77.74 108.61L76.93 108.15L72.71 105.75L71.92 105.3C71.76 105.21 71.56 105.27 71.47 105.42L70.82 106.56C70.73 106.72 70.79 106.92 70.94 107.01L71.73 107.46L75.95 109.86L76.76 110.32C76.92 110.41 77.12 110.35 77.21 110.2Z"
                                            fill="#2B0D2B"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M153.644 100.3L151.652 99.2762C151.465 99.1803 151.236 99.2539 151.14 99.4405L150.573 100.543C150.477 100.73 150.551 100.959 150.738 101.055L152.73 102.079C152.916 102.175 153.146 102.101 153.241 101.915L153.808 100.812C153.904 100.625 153.831 100.396 153.644 100.3Z"
                                            fill="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="uui-navbar03_item-right"
                                    style={{
                                      boxSizing: 'border-box',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignItems: 'flex-start',
                                      fontWeight: 400,
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-navbar03_item-heading"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#101828',
                                        marginBottom: '0.25rem',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      ¿Un Corresponsal te cobró al usar Nequi?
                                    </div>
                                    <div
                                      className="uui-text-size-small"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#344054',
                                        letterSpacing: 'normal',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: '0.7rem',
                                        lineHeight: '1.1em',
                                      }}
                                    >
                                      Si te cobraron, porfa llena este
                                      formulario para que podamos tomar medidas.
                                    </div>
                                  </div>
                                </a>
                                <a
                                  className="btn-nav-nq w-inline-block"
                                  href="https://www.nequi.com.co/personas/ayuda/negocios-que-no-reciben-nequi"
                                  tabIndex="0"
                                  style={{
                                    boxSizing: 'border-box',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    maxWidth: '100%',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0.75rem',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s',
                                    alignItems: 'flex-start',
                                    display: 'grid',
                                    gap: '0px 1rem',
                                    gridTemplateRows: 'auto',
                                    gridTemplateColumns: 'max-content 1fr',
                                    gridAutoColumns: '1fr',
                                    gridAutoFlow: 'row',
                                  }}
                                >
                                  <div
                                    className="uui-navbar03_icon-wrapper"
                                    style={{
                                      boxSizing: 'border-box',
                                      flex: '0 0 auto',
                                    }}
                                  >
                                    <div
                                      className="icon-featured-large"
                                      style={{
                                        boxSizing: 'border-box',
                                        borderRadius: '5%',
                                        backgroundColor: '#ece7f5',
                                        color: '#7f56d9',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '3rem',
                                        height: '3rem',
                                        display: 'flex',
                                      }}
                                    >
                                      <div
                                        className="uui-icon-1x1-xsmall w-embed"
                                        style={{
                                          boxSizing: 'border-box',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '2.3rem',
                                          height: '2.3rem',
                                          display: 'flex',
                                        }}
                                      >
                                        <svg
                                          height="2rem"
                                          width="2rem"
                                          fill="none"
                                          viewBox="0 0 88 88"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            boxSizing: 'border-box',
                                            overflow: 'hidden',
                                          }}
                                        >
                                          <circle
                                            cx="44"
                                            cy="44"
                                            r="36"
                                            stroke="#200020"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <circle
                                            cx="44"
                                            cy="44"
                                            r="29.5"
                                            stroke="#200020"
                                            strokeDasharray="8 4"
                                            strokeLinecap="round"
                                            strokeLinejoin="bevel"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M56 58C56 58 53 52 44 52C35 52 32 58 32 58"
                                            stroke="#DA0081"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <circle
                                            cx="36.5"
                                            cy="40.5"
                                            fill="#DA0081"
                                            r="2"
                                            stroke="#DA0081"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <circle
                                            cx="51.5"
                                            cy="40.5"
                                            fill="#DA0081"
                                            r="2"
                                            stroke="#DA0081"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                          <path
                                            d="M53 47.5C53 48.6046 52.3284 49 51.5 49C50.6716 49 50 48.6046 50 47.5C50 46.3954 51.5 45 51.5 45C51.5 45 53 46.3954 53 47.5Z"
                                            stroke="#200020"
                                            style={{ boxSizing: 'border-box' }}
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="uui-navbar03_item-right"
                                    style={{
                                      boxSizing: 'border-box',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignItems: 'flex-start',
                                      fontWeight: 400,
                                      display: 'flex',
                                    }}
                                  >
                                    <div
                                      className="uui-navbar03_item-heading"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#101828',
                                        marginBottom: '0.25rem',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 600,
                                      }}
                                    >
                                      ¿No te recibieron un pago Nequi?
                                    </div>
                                    <div
                                      className="uui-text-size-small"
                                      style={{
                                        boxSizing: 'border-box',
                                        color: '#344054',
                                        letterSpacing: 'normal',
                                        fontFamily:
                                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                        fontSize: '0.7rem',
                                        lineHeight: '1.1em',
                                      }}
                                    >
                                      Cuéntanos aquí y te ayudamos a solucionar
                                      de una.
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div
                  className="uui-navbar06_menu-dropdown w-dropdown"
                  style={{
                    boxSizing: 'border-box',
                    textAlign: 'left',
                    zIndex: 900,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'inline-block',
                    position: 'static',
                  }}
                >
                  <div
                    id="w-dropdown-toggle-2"
                    className="uui-navbar06_dropdown-toggle w-dropdown-toggle"
                    aria-controls="w-dropdown-list-2"
                    aria-expanded="false"
                    aria-haspopup="menu"
                    role="button"
                    tabIndex="0"
                    style={{
                      boxSizing: 'border-box',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      verticalAlign: 'top',
                      textAlign: 'left',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      position: 'relative',
                      userSelect: 'none',
                      cursor: 'pointer',
                      padding: '1.75rem 2.5rem 1.75rem 1rem',
                      transition: '0.3s',
                      color: '#200020',
                      alignItems: 'center',
                      height: '4rem',
                      paddingRight: '2.5rem',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 400,
                      display: 'flex',
                    }}
                  >
                    <div
                      className="uui-dropdown-icon w-embed"
                      style={{
                        boxSizing: 'border-box',
                        inset: 'auto 0% auto auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '1.25rem',
                        height: '1.25rem',
                        marginRight: '1rem',
                        display: 'flex',
                        position: 'absolute',
                      }}
                    >
                      <svg
                        height="20"
                        width="20"
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ boxSizing: 'border-box', overflow: 'hidden' }}
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.67"
                          style={{ boxSizing: 'border-box' }}
                        />
                      </svg>
                    </div>
                    <div style={{ boxSizing: 'border-box' }}>Conócenos</div>
                  </div>
                  <nav
                    id="w-dropdown-list-2"
                    className="uui-navbar06_dropdown-list w-dropdown-list"
                    aria-labelledby="w-dropdown-toggle-2"
                    style={{
                      boxSizing: 'border-box',
                      background: 'rgb(221, 221, 221)',
                      minWidth: '100%',
                      display: 'none',
                      position: 'absolute',
                      boxShadow:
                        'rgba(0, 0, 0, 0.08) 0px 12px 16px -4px, rgba(16, 24, 40, 0.03) 0px 4px 6px -2px',
                    }}
                  >
                    <div
                      className="uui-navbar05_dropdown-content-left"
                      style={{
                        boxSizing: 'border-box',
                        gap: '0px 1.5rem',
                        flex: '1 1 0%',
                        gridTemplateRows: 'auto',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gridAutoColumns: '1fr',
                        width: '100%',
                        maxWidth: '80rem',
                        height: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '2rem',
                        paddingBottom: '2rem',
                        display: 'grid',
                      }}
                    >
                      <div
                        className="uui-navbar05_dropdown-link-list"
                        style={{
                          boxSizing: 'border-box',
                          gap: '1rem 0px',
                          gridTemplateRows: 'max-content',
                          gridTemplateColumns: '1fr',
                          gridAutoColumns: '1fr',
                          display: 'grid',
                        }}
                      >
                        <a
                          className="btn-nav-nq w-inline-block"
                          href="https://www.nequi.com.co/personas/conocenos/somos-nequi"
                          tabIndex="0"
                          style={{
                            boxSizing: 'border-box',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            maxWidth: '100%',
                            borderRadius: '0.5rem',
                            padding: '0.5rem 0.75rem',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s',
                            alignItems: 'flex-start',
                            display: 'grid',
                            gap: '0px 1rem',
                            gridTemplateRows: 'auto',
                            gridTemplateColumns: 'max-content 1fr',
                            gridAutoColumns: '1fr',
                            gridAutoFlow: 'row',
                          }}
                        >
                          <div
                            className="uui-navbar05_icon-holder"
                            style={{
                              boxSizing: 'border-box',
                              flex: '0 0 auto',
                            }}
                          >
                            <div
                              className="icon-featured-large-2"
                              style={{
                                boxSizing: 'border-box',
                                borderRadius: '5%',
                                backgroundColor: '#ece7f5',
                                color: '#7f56d9',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '3rem',
                                height: '3rem',
                                display: 'flex',
                              }}
                            >
                              <div
                                className="uui-icon-1x1-xsmall-2 w-embed"
                                style={{
                                  boxSizing: 'border-box',
                                  width: '2rem',
                                  height: '2rem',
                                }}
                              >
                                <svg
                                  height="2rem"
                                  width="2rem"
                                  fill="none"
                                  viewBox="0 0 74 58"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    boxSizing: 'border-box',
                                    overflow: 'hidden',
                                  }}
                                >
                                  <path
                                    d="M11.8595 0H2.05469C0.919917 0 0 0.919917 0 2.05469V10.3816C0 11.5164 0.919917 12.4363 2.05469 12.4363H11.8595C12.9943 12.4363 13.9142 11.5164 13.9142 10.3816V2.05469C13.9142 0.919917 12.9943 0 11.8595 0Z"
                                    fill="#DA0081"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M71.5899 0H63.1548C62.0013 0 61.1001 0.937228 61.1001 2.05469V35.7589C61.1001 36.4438 60.1989 36.6961 59.8745 36.0833L40.2648 0.901181C39.9404 0.324425 39.3636 0 38.6787 0H24.6564C23.5029 0 22.6017 0.937228 22.6017 2.05469V55.9093C22.6017 57.0628 23.5389 57.964 24.6564 57.964H33.0914C34.2449 57.964 35.1461 57.0267 35.1461 55.9093V21.1958C35.1461 20.5109 36.0473 20.2585 36.3717 20.8713L56.5221 57.0988C56.8465 57.6756 57.4233 58 58.1082 58H71.5178C72.6713 58 73.5725 57.0628 73.5725 55.9453V2.05469C73.5725 0.901181 72.6352 0 71.5178 0H71.5899Z"
                                    fill="#200020"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            className="uui-navbar05_item-right"
                            style={{
                              boxSizing: 'border-box',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'flex-start',
                              display: 'flex',
                            }}
                          >
                            <div
                              className="uui-navbar05_item-heading"
                              style={{
                                boxSizing: 'border-box',
                                color: '#200020',
                                marginBottom: '0.25rem',
                                fontWeight: 600,
                                fontFamily: 'Manrope, sans-serif',
                              }}
                            >
                              ¿Quienes somos?
                            </div>
                            <div
                              className="uui-text-size-small-2"
                              style={{
                                boxSizing: 'border-box',
                                color: '#475467',
                                letterSpacing: 'normal',
                                fontSize: '0.7rem',
                                lineHeight: '1.1em',
                                fontFamily: 'Manrope, sans-serif',
                              }}
                            >
                              Ayudamos a las personas a tener una mejor relación
                              con su plata.
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className="uui-navbar05_dropdown-link-list"
                        style={{
                          boxSizing: 'border-box',
                          gap: '1rem 0px',
                          gridTemplateRows: 'max-content',
                          gridTemplateColumns: '1fr',
                          gridAutoColumns: '1fr',
                          display: 'grid',
                        }}
                      >
                        <a
                          className="btn-nav-nq w-inline-block"
                          href="https://www.nequi.com.co/personas/conocenos/nequi-trabaja-con-nosotros"
                          tabIndex="0"
                          style={{
                            boxSizing: 'border-box',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            maxWidth: '100%',
                            borderRadius: '0.5rem',
                            padding: '0.5rem 0.75rem',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s',
                            alignItems: 'flex-start',
                            display: 'grid',
                            gap: '0px 1rem',
                            gridTemplateRows: 'auto',
                            gridTemplateColumns: 'max-content 1fr',
                            gridAutoColumns: '1fr',
                            gridAutoFlow: 'row',
                          }}
                        >
                          <div
                            className="uui-navbar05_icon-holder"
                            style={{
                              boxSizing: 'border-box',
                              flex: '0 0 auto',
                            }}
                          >
                            <div
                              className="icon-featured-large-2"
                              style={{
                                boxSizing: 'border-box',
                                borderRadius: '5%',
                                backgroundColor: '#ece7f5',
                                color: '#7f56d9',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '3rem',
                                height: '3rem',
                                display: 'flex',
                              }}
                            >
                              <div
                                className="uui-icon-1x1-xsmall-2 w-embed"
                                style={{
                                  boxSizing: 'border-box',
                                  width: '2rem',
                                  height: '2rem',
                                }}
                              >
                                <svg
                                  height="2rem"
                                  width="2rem"
                                  fill="none"
                                  viewBox="0 0 88 88"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    boxSizing: 'border-box',
                                    overflow: 'hidden',
                                  }}
                                >
                                  <path
                                    d="M49 62.1871C50.1295 61.6886 51.2416 60.9694 52.2598 59.9512L64.8889 47.3221"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M50.9217 20.3606L45.4332 25.8491L38.8921 26.0616C36.8097 26.1291 35.0666 24.4958 34.9991 22.4134C34.9536 21.0179 35.6721 19.7748 36.7778 19.0861"
                                    stroke="#DA0081"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M24.8953 28.1055L33.1035 35.797C34.6238 37.2219 34.7014 39.6094 33.2767 41.1297C32.1003 42.3849 30.4571 43.0297 29.0642 42.4144"
                                    stroke="#DA0081"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M30.3891 22.8456L39.2222 30.8502C40.7425 32.2751 40.4145 34.555 38.9898 36.0752C37.5651 37.5955 35.1777 37.6731 33.6574 36.2486L25.2299 28.3514"
                                    stroke="#DA0081"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    clipRule="evenodd"
                                    d="M49.1013 62.0603L57.4275 70.3865L49.1013 62.0603Z"
                                    fill="white"
                                    fillRule="evenodd"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M53.4684 27.7567L57.1606 24.0645C58.7018 22.5233 61.2009 22.5233 62.742 24.0645C64.277 25.5995 64.2843 28.0856 62.7583 29.6294L58.9624 33.4704L63.3576 29.0752C64.6926 27.7402 66.8572 27.7402 68.1922 29.0752C69.5273 30.4102 69.5273 32.5749 68.1922 33.9099L65.9977 36.1045M65.9977 36.1045C67.3936 34.7118 69.6544 34.7128 71.0491 36.1075C72.4448 37.5032 72.4448 39.7662 71.0491 41.1619L64.8888 47.3222M65.9977 36.1045L64.4564 37.6458M31.8223 70.2799L39.5138 62.5883C39.5138 62.5883 44.4006 64.0904 49 62.0603L57.4275 70.3865"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    clipRule="evenodd"
                                    d="M65.0143 47.1382L72.735 54.8589L65.0143 47.1382Z"
                                    fill="white"
                                    fillRule="evenodd"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M65.0143 47.1382L72.735 54.8589"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M22.1111 35.7391L28.2688 41.5106C29.7891 42.9355 29.8666 45.323 28.4419 46.8433C27.0173 48.3636 24.6298 48.4411 23.1095 47.0167"
                                    stroke="#DA0081"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M39.2222 30.8502C40.7427 32.2746 42.4002 31.8819 43.8246 30.3616C45.0058 29.101 45.1546 27.2445 44.3044 25.8348"
                                    stroke="#DA0081"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M50.8333 20.4613L49.9339 20.8983C50.0752 21.1892 50.3486 21.3938 50.6675 21.4475C50.9865 21.5011 51.3117 21.3971 51.5404 21.1684L50.8333 20.4613ZM55.7213 25.5045L55.0142 24.7974V24.7974L55.7213 25.5045ZM15.2634 54.6606C14.8899 55.0674 14.9169 55.7 15.3237 56.0735C15.7305 56.447 16.3631 56.4201 16.7366 56.0132L15.2634 54.6606ZM23.3333 47.3502L24.0699 48.0265C24.4378 47.6259 24.418 47.0048 24.0254 46.6284L23.3333 47.3502ZM22.1111 35.7391L21.5708 36.5806C22.0095 36.8622 22.591 36.7596 22.9068 36.3448C23.2226 35.93 23.1667 35.3422 22.7784 34.9943L22.1111 35.7391ZM17.4459 36.5393L18.1756 37.2231L18.1756 37.2231L17.4459 36.5393ZM17.6191 41.8717L18.3112 41.1498L18.3028 41.142L17.6191 41.8717ZM23.8718 28.5244C24.2748 28.902 24.9077 28.8814 25.2853 28.4784C25.6629 28.0754 25.6423 27.4425 25.2393 27.0649L23.8718 28.5244ZM19.5627 28.2786L18.8331 27.5948L18.833 27.5949L19.5627 28.2786ZM19.7361 33.6113L19.0524 34.341C19.0578 34.3461 19.0633 34.3511 19.0688 34.3561L19.7361 33.6113ZM30.6667 22.9057L29.9829 23.6354C30.2915 23.9246 30.7487 23.9884 31.1247 23.7947C31.5007 23.601 31.7141 23.1916 31.6577 22.7724L30.6667 22.9057ZM24.5556 22.9057L25.2852 23.5895L24.5556 22.9057ZM31.9242 19.2097L31.1945 18.5259L31.1944 18.526L31.9242 19.2097ZM36.7778 18.628L36.2201 19.458C36.3954 19.5758 36.6036 19.6351 36.8147 19.6273L36.7778 18.628ZM47.4064 18.2356L47.3739 17.2361L47.3695 17.2362L47.4064 18.2356ZM51.5404 21.1684C52.4785 20.2304 54.0015 20.2544 55.0142 21.267L56.4284 19.8528C54.7104 18.1348 51.9189 17.9615 50.1262 19.7542L51.5404 21.1684ZM55.0142 21.267C55.989 22.2419 55.989 23.8225 55.0142 24.7974L56.4284 26.2116C58.1843 24.4557 58.1843 21.6087 56.4284 19.8528L55.0142 21.267ZM55.0142 24.7974L52.9814 26.8301L54.3957 28.2444L56.4284 26.2116L55.0142 24.7974ZM16.7366 56.0132L24.0699 48.0265L22.5967 46.6739L15.2634 54.6606L16.7366 56.0132ZM22.1111 35.7391C22.6514 34.8976 22.651 34.8973 22.6505 34.897C22.6503 34.8969 22.6498 34.8966 22.6495 34.8964C22.6488 34.8959 22.6481 34.8955 22.6473 34.895C22.6458 34.894 22.6441 34.893 22.6423 34.8918C22.6386 34.8895 22.6343 34.8868 22.6294 34.8838C22.6195 34.8777 22.6072 34.8702 22.5925 34.8615C22.563 34.844 22.5238 34.8216 22.4755 34.7956C22.3791 34.7438 22.2453 34.6772 22.0796 34.608C21.7505 34.4707 21.281 34.3172 20.7189 34.2563C19.5542 34.1303 18.0653 34.4159 16.7163 35.8555L18.1756 37.2231C19.0473 36.2929 19.891 36.1784 20.5037 36.2447C20.8303 36.2801 21.1107 36.3708 21.3093 36.4537C21.4075 36.4947 21.482 36.5322 21.528 36.5569C21.5509 36.5692 21.5664 36.5782 21.5738 36.5826C21.5775 36.5848 21.5791 36.5858 21.5787 36.5855C21.5785 36.5854 21.5777 36.5849 21.5764 36.5841C21.5757 36.5837 21.5749 36.5832 21.574 36.5826C21.5735 36.5823 21.573 36.582 21.5725 36.5816C21.5722 36.5815 21.5718 36.5812 21.5717 36.5811C21.5713 36.5808 21.5708 36.5806 22.1111 35.7391ZM16.7163 35.8555C14.9139 37.7788 15.012 40.7993 16.9354 42.6014L18.3028 41.142C17.1856 40.0952 17.1286 38.3404 18.1756 37.2231L16.7163 35.8555ZM16.927 42.5935L22.6413 48.072L24.0254 46.6284L18.3112 41.1499L16.927 42.5935ZM25.2393 27.0649C24.2643 26.1513 23.0774 25.794 21.9003 25.9398C20.7469 26.0828 19.6745 26.697 18.8331 27.5948L20.2923 28.9625C20.8758 28.3399 21.5396 27.9998 22.1463 27.9247C22.7292 27.8524 23.3263 28.0132 23.8718 28.5244L25.2393 27.0649ZM18.833 27.5949C17.0307 29.5184 17.1288 32.5386 19.0524 34.341L20.4198 32.8815C19.3024 31.8345 19.2453 30.0799 20.2924 28.9623L18.833 27.5949ZM19.0688 34.3561L21.4438 36.4839L22.7784 34.9943L20.4034 32.8665L19.0688 34.3561ZM31.3505 22.1761C30.3619 21.2497 28.9251 20.8152 27.5856 20.8014C26.2503 20.7877 24.7911 21.192 23.8259 22.2219L25.2852 23.5895C25.7448 23.0992 26.581 22.7912 27.565 22.8013C28.5447 22.8114 29.4511 23.1371 29.9829 23.6354L31.3505 22.1761ZM23.8259 22.2219C22.417 23.7253 21.8364 26.6172 23.8718 28.5244L25.2393 27.0649C24.2337 26.1227 24.4033 24.5306 25.2852 23.5895L23.8259 22.2219ZM31.1944 18.526C30.6637 19.0925 30.2523 19.8855 29.9915 20.6516C29.7329 21.4113 29.5743 22.2857 29.6756 23.039L31.6577 22.7724C31.6132 22.441 31.6799 21.8979 31.8848 21.2961C32.0875 20.7006 32.3779 20.1881 32.6539 19.8935L31.1944 18.526ZM37.3355 17.7979C35.4158 16.508 32.8085 16.8038 31.1945 18.5259L32.6538 19.8936C33.6051 18.8786 35.1237 18.7213 36.2201 19.458L37.3355 17.7979ZM47.3695 17.2362L36.7409 17.6287L36.8147 19.6273L47.4433 19.2349L47.3695 17.2362ZM51.7328 20.0243C50.9705 18.4554 49.3897 17.1706 47.3739 17.2361L47.4389 19.235C48.4944 19.2007 49.4347 19.871 49.9339 20.8983L51.7328 20.0243Z"
                                    fill="#200020"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            className="uui-navbar05_item-right"
                            style={{
                              boxSizing: 'border-box',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'flex-start',
                              display: 'flex',
                            }}
                          >
                            <div
                              className="uui-navbar05_item-heading"
                              style={{
                                boxSizing: 'border-box',
                                color: '#200020',
                                marginBottom: '0.25rem',
                                fontWeight: 600,
                                fontFamily: 'Manrope, sans-serif',
                              }}
                            >
                              Trabaja con nosotros
                            </div>
                            <div
                              className="uui-text-size-small-2"
                              style={{
                                boxSizing: 'border-box',
                                color: '#475467',
                                letterSpacing: 'normal',
                                fontSize: '0.7rem',
                                lineHeight: '1.1em',
                                fontFamily: 'Manrope, sans-serif',
                              }}
                            >
                              Juntos vibramos por un mismo propósito y grandes
                              retos.
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className="uui-navbar05_dropdown-link-list"
                        style={{
                          boxSizing: 'border-box',
                          gap: '1rem 0px',
                          gridTemplateRows: 'max-content',
                          gridTemplateColumns: '1fr',
                          gridAutoColumns: '1fr',
                          display: 'grid',
                        }}
                      >
                        <a
                          className="btn-nav-nq w-inline-block"
                          href="https://www.nequi.com.co/personas/conocenos/sala-de-prensa"
                          tabIndex="0"
                          style={{
                            boxSizing: 'border-box',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            maxWidth: '100%',
                            borderRadius: '0.5rem',
                            padding: '0.5rem 0.75rem',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s',
                            alignItems: 'flex-start',
                            display: 'grid',
                            gap: '0px 1rem',
                            gridTemplateRows: 'auto',
                            gridTemplateColumns: 'max-content 1fr',
                            gridAutoColumns: '1fr',
                            gridAutoFlow: 'row',
                          }}
                        >
                          <div
                            className="uui-navbar05_icon-holder"
                            style={{
                              boxSizing: 'border-box',
                              flex: '0 0 auto',
                            }}
                          >
                            <div
                              className="icon-featured-large-2"
                              style={{
                                boxSizing: 'border-box',
                                borderRadius: '5%',
                                backgroundColor: '#ece7f5',
                                color: '#7f56d9',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '3rem',
                                height: '3rem',
                                display: 'flex',
                              }}
                            >
                              <div
                                className="uui-icon-1x1-xsmall-2 w-embed"
                                style={{
                                  boxSizing: 'border-box',
                                  width: '2rem',
                                  height: '2rem',
                                }}
                              >
                                <svg
                                  height="2rem"
                                  width="2rem"
                                  fill="none"
                                  viewBox="0 0 88 88"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    boxSizing: 'border-box',
                                    overflow: 'hidden',
                                  }}
                                >
                                  <rect
                                    height="58.6667"
                                    width="39.1111"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x="30.5556"
                                    y="13.4444"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M30.5556 13.4444C30.5556 10.0694 27.8195 7.33333 24.4444 7.33333C21.0694 7.33333 18.3333 10.0694 18.3333 13.4444V72.1111"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M30.5556 72.1111C30.5556 68.736 27.8195 66 24.4444 66C21.0694 66 18.3333 68.736 18.3333 72.1111C18.3333 75.4862 21.0694 78.2222 24.4444 78.2222H61.1111V72.1111"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <rect
                                    height="17.1111"
                                    width="29.3333"
                                    rx="2"
                                    stroke="#DA0081"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    x="35.4444"
                                    y="18.3333"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <rect
                                    height="12.2222"
                                    width="15.8889"
                                    rx="2"
                                    stroke="#DA0081"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    x="50.1111"
                                    y="55"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M36.6667 57.4444H46.4444"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M36.6667 41.5556H63.5556"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M36.6667 64.7778H46.4444"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                  <path
                                    d="M36.6667 48.8889H63.5556"
                                    stroke="#200020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ boxSizing: 'border-box' }}
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            className="uui-navbar05_item-right"
                            style={{
                              boxSizing: 'border-box',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'flex-start',
                              display: 'flex',
                            }}
                          >
                            <div
                              className="uui-navbar05_text-wrapper"
                              style={{
                                boxSizing: 'border-box',
                                gap: '0px 0.5rem',
                                alignItems: 'center',
                                marginBottom: '0.5rem',
                                display: 'flex',
                              }}
                            >
                              <div
                                className="uui-navbar05_item-heading margin-bottom-0"
                                style={{
                                  boxSizing: 'border-box',
                                  fontWeight: 600,
                                  fontFamily: 'Manrope, sans-serif',
                                  color: '#200020',
                                  marginBottom: '0px',
                                }}
                              >
                                Sala de prensa
                              </div>
                            </div>
                            <div
                              className="uui-text-size-small-2"
                              style={{
                                boxSizing: 'border-box',
                                color: '#475467',
                                letterSpacing: 'normal',
                                fontSize: '0.7rem',
                                lineHeight: '1.1em',
                                fontFamily: 'Manrope, sans-serif',
                              }}
                            >
                              Entérate de lo último sobre Nequi.
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
                <a
                  className="uui-navbar03_link w-nav-link"
                  href="https://www.nequi.com.co/negocios"
                  style={{
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    textDecoration: 'none',
                    verticalAlign: 'top',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'inline-block',
                    position: 'relative',
                    padding: '1.35rem 1rem 1.75rem',
                    transition: '0.3s',
                    color: '#200020',
                    textAlign: 'center',
                    alignItems: 'center',
                    height: '4rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                  }}
                >
                  Tu negocio
                </a>
              </div>
              <div
                className="uui-navbar03_menu-right"
                style={{
                  boxSizing: 'border-box',
                  gridTemplateRows: 'auto',
                  gridTemplateColumns: '1fr 1fr',
                  gridAutoColumns: '1fr',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <div
                  className="uui-navbar03_button-wrapper"
                  style={{
                    boxSizing: 'border-box',
                    gap: '0.75rem',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <a
                    className="nq-btn cr-btn-nq w-inline-block"
                    href="https://clientes.nequi.com.co/credito"
                    target="_blank"
                    style={{
                      boxSizing: 'border-box',
                      maxWidth: '100%',
                      gap: '0.4em',
                      border: '1px solid rgba(0, 0, 0, 0)',
                      borderRadius: '0.3rem',
                      padding: '0.7em 1.2em',
                      textDecoration: 'none',
                      textAlign: 'center',
                      letterSpacing: '0px',
                      fontSize: '1rem',
                      lineHeight: '1.5em',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transitionProperty: 'box-shadow, border-color',
                      transitionDuration: '0.3s, 0.3s',
                      transitionTimingFunction:
                        'cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)',
                      display: 'inline-flex',
                      backgroundColor: 'white',
                      color: '#da0081',
                      fontWeight: 600,
                      position: 'relative',
                      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 3px',
                      height: '3rem',
                    }}
                  >
                    <div
                      className="new-text"
                      style={{ boxSizing: 'border-box', lineHeight: '1.1em' }}
                    >
                      Paga tu crédito
                    </div>
                    <div
                      className="new-lottie"
                      style={{
                        boxSizing: 'border-box',
                        inset: '0% 0% auto auto',
                        width: '1.5rem',
                        height: '1.5rem',
                        position: 'absolute',
                      }}
                    >
                      <svg
                        height="200"
                        width="200"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          boxSizing: 'border-box',
                          overflow: 'hidden',
                          width: '100%',
                          height: '100%',
                          transform: 'translate3d(0px, 0px, 0px)',
                          contentVisibility: 'visible',
                        }}
                      >
                        <defs style={{ boxSizing: 'border-box' }}>
                          <clippath
                            id="__lottie_element_2"
                            style={{ boxSizing: 'border-box' }}
                          >
                            <rect
                              height="200"
                              width="200"
                              x="0"
                              y="0"
                              style={{ boxSizing: 'border-box' }}
                            />
                          </clippath>
                          <clippath
                            id="__lottie_element_4"
                            style={{ boxSizing: 'border-box' }}
                          >
                            <path
                              d="M0,0 L200,0 L200,200 L0,200z"
                              style={{ boxSizing: 'border-box' }}
                            />
                          </clippath>
                          <clippath
                            id="__lottie_element_14"
                            style={{ boxSizing: 'border-box' }}
                          >
                            <path
                              d="M0,0 L200,0 L200,200 L0,200z"
                              style={{ boxSizing: 'border-box' }}
                            />
                          </clippath>
                        </defs>
                        <g
                          clipPath="url(#__lottie_element_2)"
                          style={{ boxSizing: 'border-box' }}
                        >
                          <g
                            clipPath="url(#__lottie_element_14)"
                            opacity="1"
                            transform="matrix(1,0,0,1,0,0)"
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                            }}
                          >
                            <g
                              opacity="0.04620773920236584"
                              transform="matrix(0.03126831352710724,0,0,0.03126831352710724,100.2993392944336,99.0516128540039)"
                              style={{
                                boxSizing: 'border-box',
                                display: 'block',
                              }}
                            >
                              <g
                                opacity="1"
                                transform="matrix(1,0,0,1,0.3089999854564667,-0.9789999723434448)"
                                style={{ boxSizing: 'border-box' }}
                              >
                                <path
                                  d=" M0,-74.0780029296875 C40.88364791870117,-74.0780029296875 74.0780029296875,-40.88364791870117 74.0780029296875,0 C74.0780029296875,40.88364791870117 40.88364791870117,74.0780029296875 0,74.0780029296875 C-40.88364791870117,74.0780029296875 -74.0780029296875,40.88364791870117 -74.0780029296875,0 C-74.0780029296875,-40.88364791870117 -40.88364791870117,-74.0780029296875 0,-74.0780029296875z"
                                  fill="rgb(217,0,129)"
                                  fillOpacity="1"
                                  style={{ boxSizing: 'border-box' }}
                                />
                              </g>
                            </g>
                            <g
                              opacity="0.30293535964014107"
                              transform="matrix(0.2678273916244507,0,0,0.2678273916244507,100.22624206542969,99.283203125)"
                              style={{
                                boxSizing: 'border-box',
                                display: 'none',
                              }}
                            >
                              <g
                                opacity="1"
                                transform="matrix(1,0,0,1,0.3089999854564667,-0.9789999723434448)"
                                style={{ boxSizing: 'border-box' }}
                              >
                                <path
                                  d=" M0,-74.0780029296875 C40.88364791870117,-74.0780029296875 74.0780029296875,-40.88364791870117 74.0780029296875,0 C74.0780029296875,40.88364791870117 40.88364791870117,74.0780029296875 0,74.0780029296875 C-40.88364791870117,74.0780029296875 -74.0780029296875,40.88364791870117 -74.0780029296875,0 C-74.0780029296875,-40.88364791870117 -40.88364791870117,-74.0780029296875 0,-74.0780029296875z"
                                  fill="rgb(217,0,129)"
                                  fillOpacity="1"
                                  style={{ boxSizing: 'border-box' }}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            clipPath="url(#__lottie_element_4)"
                            opacity="1"
                            transform="matrix(1,0,0,1,0,0)"
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                            }}
                          >
                            <g
                              opacity="0.0005386468866268501"
                              transform="matrix(0.999660849571228,0,0,0.999660849571228,100.0000991821289,99.99967193603516)"
                              style={{
                                boxSizing: 'border-box',
                                display: 'none',
                              }}
                            >
                              <g
                                opacity="1"
                                transform="matrix(1,0,0,1,0.3089999854564667,-0.9789999723434448)"
                                style={{ boxSizing: 'border-box' }}
                              >
                                <path
                                  d=" M0,-74.0780029296875 C40.88364791870117,-74.0780029296875 74.0780029296875,-40.88364791870117 74.0780029296875,0 C74.0780029296875,40.88364791870117 40.88364791870117,74.0780029296875 0,74.0780029296875 C-40.88364791870117,74.0780029296875 -74.0780029296875,40.88364791870117 -74.0780029296875,0 C-74.0780029296875,-40.88364791870117 -40.88364791870117,-74.0780029296875 0,-74.0780029296875z"
                                  fill="rgb(217,0,129)"
                                  fillOpacity="1"
                                  style={{ boxSizing: 'border-box' }}
                                />
                              </g>
                            </g>
                            <g
                              opacity="0.09758777934376803"
                              transform="matrix(0.9306368231773376,0,0,0.9306368231773376,100.02143096923828,99.93209838867188)"
                              style={{
                                boxSizing: 'border-box',
                                display: 'block',
                              }}
                            >
                              <g
                                opacity="1"
                                transform="matrix(1,0,0,1,0.3089999854564667,-0.9789999723434448)"
                                style={{ boxSizing: 'border-box' }}
                              >
                                <path
                                  d=" M0,-74.0780029296875 C40.88364791870117,-74.0780029296875 74.0780029296875,-40.88364791870117 74.0780029296875,0 C74.0780029296875,40.88364791870117 40.88364791870117,74.0780029296875 0,74.0780029296875 C-40.88364791870117,74.0780029296875 -74.0780029296875,40.88364791870117 -74.0780029296875,0 C-74.0780029296875,-40.88364791870117 -40.88364791870117,-74.0780029296875 0,-74.0780029296875z"
                                  fill="rgb(217,0,129)"
                                  fillOpacity="1"
                                  style={{ boxSizing: 'border-box' }}
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a
                    className="nq-btn cc-light nq-btn-enter w-inline-block"
                    href="https://transacciones.nequi.com/bdigital/login.jsp"
                    target="_blank"
                    style={{
                      boxSizing: 'border-box',
                      maxWidth: '100%',
                      gap: '0.4em',
                      border: '1px solid rgba(0, 0, 0, 0)',
                      borderRadius: '0.3rem',
                      padding: '0.7em 1.2em',
                      textDecoration: 'none',
                      textAlign: 'center',
                      letterSpacing: '0px',
                      fontSize: '1rem',
                      lineHeight: '1.5em',
                      fontWeight: 'var(--component-button--font-weight)',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transitionProperty: 'box-shadow, border-color',
                      transitionDuration: '0.3s, 0.3s',
                      transitionTimingFunction:
                        'cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)',
                      display: 'inline-flex',
                      boxShadow: 'rgba(0, 0, 0, 0) 0px 0px inset',
                      borderColor: 'rgb(32, 0, 32)',
                      color: 'rgb(32, 0, 32)',
                      backgroundColor: 'rgb(255, 255, 255)',
                    }}
                  >
                    <div style={{ boxSizing: 'border-box' }}>Entrar</div>
                  </a>
                  <a
                    className="nq-btn nq-btn-recharge w-inline-block"
                    href="https://clientes.nequi.com.co/recargas"
                    target="_blank"
                    style={{
                      boxSizing: 'border-box',
                      maxWidth: '100%',
                      gap: '0.4em',
                      border: '1px solid rgba(0, 0, 0, 0)',
                      borderRadius: '0.3rem',
                      padding: '0.7em 1.2em',
                      textDecoration: 'none',
                      color: 'rgb(255, 255, 255)',
                      textAlign: 'center',
                      letterSpacing: '0px',
                      fontSize: '1rem',
                      lineHeight: '1.5em',
                      fontWeight: 'var(--component-button--font-weight)',
                      backgroundColor: 'rgb(218, 0, 129)',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transitionProperty: 'box-shadow, border-color',
                      transitionDuration: '0.3s, 0.3s',
                      transitionTimingFunction:
                        'cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)',
                      display: 'inline-flex',
                      boxShadow: 'rgba(0, 0, 0, 0) 0px 0px inset',
                    }}
                  >
                    <div style={{ boxSizing: 'border-box' }}>Recargar</div>
                  </a>
                </div>
              </div>
            </nav>
            <div
              className="uui-navbar3_menu-button w-nav-button"
              aria-controls="w-nav-overlay-0"
              aria-expanded="false"
              aria-haspopup="menu"
              aria-label="menu"
              role="button"
              tabIndex="0"
              style={{
                boxSizing: 'border-box',
                cssFloat: 'right',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                fontSize: '24px',
                display: 'none',
                position: 'relative',
                padding: '0px',
                userSelect: 'text',
              }}
            >
              <div
                id="menu-button-mobile"
                className="menu-icon_component"
                style={{ boxSizing: 'border-box' }}
              >
                <div
                  className="menu-icon_line-top"
                  style={{ boxSizing: 'border-box' }}
                />
                <div
                  className="menu-icon_line-middle"
                  style={{ boxSizing: 'border-box' }}
                >
                  <div
                    className="menu-icon_line-middle-inner"
                    style={{ boxSizing: 'border-box' }}
                  />
                </div>
                <div
                  className="menu-icon_line-bottom"
                  style={{ boxSizing: 'border-box' }}
                />
              </div>
            </div>
          </div>
          <div
            id="w-nav-overlay-0"
            className="w-nav-overlay"
            style={{
              boxSizing: 'border-box',
              overflow: 'hidden',
              width: '100%',
              display: 'none',
              position: 'absolute',
              top: '100%',
              left: '0px',
              right: '0px',
            }}
          />
        </div>
      </header>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  text-size-adjust: 100%;
  font-family: sans-serif;
  height: 100%;
}

body {
  box-sizing: border-box;
  margin: 0px;
  min-height: 100%;
  font-size: 14px;
  line-height: 20px;
  color: #200020;
  font-family: Manrope, sans-serif;
  background-color: white;
}
`,
        }}
      />
    </>
  );
}
