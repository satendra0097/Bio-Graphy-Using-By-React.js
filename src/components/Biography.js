// Biography.js - Complete React Component for Devendra Pratap Singh Tomar (Ramu Bhaiya)
// Single line inline CSS - Human written style

import React, { useState } from 'react';

const Biography = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", color: '#1c2635', backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#10233d', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          <div style={{ fontFamily: "'Fraunces', serif", color: '#fdfbf7', fontSize: '1.35rem', fontWeight: 600 }}>
            Ramu Bhaiya <span style={{ color: '#b8912f' }}>· Gwalior</span>
          </div>
          <div style={{ display: 'flex', gap: '36px', margin: 0, padding: 0 }}>
            <a href="#about" style={{ textDecoration: 'none', color: '#c7cfdb', fontSize: '1rem', fontWeight: 500 }}>About</a>
            <a href="#work" style={{ textDecoration: 'none', color: '#c7cfdb', fontSize: '1rem', fontWeight: 500 }}>Work</a>
            <a href="#sports" style={{ textDecoration: 'none', color: '#c7cfdb', fontSize: '1rem', fontWeight: 500 }}>Sports</a>
            <a href="#journey" style={{ textDecoration: 'none', color: '#c7cfdb', fontSize: '1rem', fontWeight: 500 }}>Journey</a>
          </div>
          <button style={{ display: 'none', background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#fdfbf7', borderRadius: '6px', padding: '8px 16px', fontSize: '0.95rem', cursor: 'pointer' }} onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </button>
        </div>
      </nav>

      {/* Ramu bhaiya */}
      <header style={{ background: '#10233d', color: '#fdfbf7', padding: '60px 0 70px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8912f', fontWeight: 600, marginBottom: '14px', display: 'block' }}>Gwalior · Madhya Pradesh</span>

            {/* Attractive Name Design */}
            <div style={{ marginBottom: '8px' }}>
              <h1 style={{
                color: '#fdfbf7',
                fontSize: '3rem',
                fontWeight: 700,
                fontFamily: "'Fraunces', serif",
                margin: 0,
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #fdfbf7 0%, #b8912f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none'
              }}>
                Devendra Pratap Singh Tomar
              </h1>
              <div style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, #b8912f, transparent)',
                marginTop: '8px',
                borderRadius: '2px'
              }}></div>
            </div>

            <span style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#b8912f',
              fontSize: '1.35rem',
              display: 'block',
              margin: '4px 0 18px'
            }}>known across Gwalior as "Ramu Bhaiya"</span>

            <p style={{ color: '#c7cfdb', maxWidth: '42ch', lineHeight: '1.7', margin: '0 0 14px' }}>Youth organizer, grassroots strategist, and national sports administrator anchoring public life across the Chambal-Gwalior region.</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
              <span style={{ fontSize: '0.8rem', padding: '6px 14px', borderRadius: '40px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#dbe2ec' }}>Youth Mobilization</span>
              <span style={{ fontSize: '0.8rem', padding: '6px 14px', borderRadius: '40px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#dbe2ec' }}>Vice-President, Hockey India</span>
              <span style={{ fontSize: '0.8rem', padding: '6px 14px', borderRadius: '40px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#dbe2ec' }}>Gwalior · Morena · Sheopur</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '8px',
            color: '#cdb877',
            textAlign: 'center',
            padding: 0,
            aspectRatio: '4/5',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <img
              src="ramu bhaiya1.png"
            alt="Devendra Pratap Singh Tomar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
      </header>

      {/* Quick Info */}
      <div style={{ background: '#f6f2e9', borderBottom: '1px solid #e3ddcb' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div style={{ padding: '22px 24px', borderRight: '1px solid #e3ddcb' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#b8912f', display: 'block', marginBottom: '6px', fontWeight: 600 }}>Popular Name</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '1.05rem', color: '#10233d' }}>Ramu Bhaiya</span>
          </div>
          <div style={{ padding: '22px 24px', borderRight: '1px solid #e3ddcb' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#b8912f', display: 'block', marginBottom: '6px', fontWeight: 600 }}>Based In</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '1.05rem', color: '#10233d' }}>Gwalior, M.P.</span>
          </div>
          <div style={{ padding: '22px 24px', borderRight: '1px solid #e3ddcb' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#b8912f', display: 'block', marginBottom: '6px', fontWeight: 600 }}>Affiliation</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '1.05rem', color: '#10233d' }}>Bharatiya Janata Party</span>
          </div>
          <div style={{ padding: '22px 24px', borderRight: 'none' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#b8912f', display: 'block', marginBottom: '6px', fontWeight: 600 }}>Current Role</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '1.05rem', color: '#10233d' }}>AVP, Hockey India</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" style={{ padding: '66px 0' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '44px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8912f', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Background</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 600, fontFamily: "'Fraunces', serif", color: '#10233d', margin: 0, lineHeight: '1.2' }}>Early Life &amp; Family</h2>
              <p style={{ lineHeight: '1.7', color: '#57616f', margin: '14px 0 14px' }}>Born and raised in a politically prominent Rajput family from the Gwalior-Chambal division, Devendra grew up surrounded by public service and governance.</p>
              <p style={{ lineHeight: '1.7', color: '#57616f', margin: '0 0 14px' }}>His father, Narendra Singh Tomar, has held senior national government positions and now serves as Speaker of the Madhya Pradesh Legislative Assembly. Alongside his younger brother Prabal Pratap Singh Tomar — "Raghu Bhaiya" — Devendra has built a personal network across Gwalior, Morena, and Sheopur.</p>
              <div style={{ background: '#f6f2e9', border: '1px solid #e3ddcb', borderRadius: '6px', padding: '22px 26px', marginTop: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '10px 0', borderBottom: '1px dashed #e3ddcb', fontSize: '0.92rem' }}>
                  <span style={{ color: '#57616f' }}>Father</span>
                  <span style={{ fontWeight: 600, color: '#10233d', textAlign: 'right' }}>Narendra Singh Tomar</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '10px 0', borderBottom: '1px dashed #e3ddcb', fontSize: '0.92rem' }}>
                  <span style={{ color: '#57616f' }}>Mother</span>
                  <span style={{ fontWeight: 600, color: '#10233d', textAlign: 'right' }}>Kiran Tomar</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '10px 0', borderBottom: '1px dashed #e3ddcb', fontSize: '0.92rem' }}>
                  <span style={{ color: '#57616f' }}>Brother</span>
                  <span style={{ fontWeight: 600, color: '#10233d', textAlign: 'right' }}>Prabal Pratap Singh Tomar</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '10px 0', borderBottom: 'none', fontSize: '0.92rem' }}>
                  <span style={{ color: '#57616f' }}>Sister</span>
                  <span style={{ fontWeight: 600, color: '#10233d', textAlign: 'right' }}>Nivedita Tomar</span>
                </div>
              </div>
            </div>
            <div style={{
              background: '#f6f2e9',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '8px',
              color: '#9a9276',
              textAlign: 'center',
              padding: 0,
              aspectRatio: '4/3',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
            }}>
              <img
                src="ramu bhaiya family.png"
                alt="Family photo of Devendra Pratap Singh Tomar with family members"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transform: 'scale(1.05)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work  */}
      <section id="work" style={{ padding: '66px 0', background: '#f6f2e9', borderTop: '1px solid #e3ddcb', borderBottom: '1px solid #e3ddcb' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8912f', fontWeight: 600, display: 'block', marginBottom: '8px' }}>On the Ground</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, fontFamily: "'Fraunces', serif", color: '#10233d', margin: 0, lineHeight: '1.2' }}>Political Strategy &amp; Youth Mobilization</h2>
            <p style={{ lineHeight: '1.7', color: '#57616f', margin: '12px 0 0' }}>Ramu Bhaiya has largely chosen to work behind the scenes rather than contest elections directly, functioning as an organizational backbone for the party across northern Madhya Pradesh.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <div style={{ background: '#fdfbf7', border: '1px solid #e3ddcb', borderTop: '3px solid #b8912f', padding: '24px 22px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontFamily: "'Fraunces', serif", color: '#10233d', lineHeight: '1.2' }}>Grassroots Management</h3>
              <p style={{ fontSize: '0.92rem', margin: 0, lineHeight: '1.7', color: '#57616f' }}>Coordinates booth-level strategy, election-time outreach, and local campaign logistics.</p>
            </div>
            <div style={{ background: '#fdfbf7', border: '1px solid #e3ddcb', borderTop: '3px solid #b8912f', padding: '24px 22px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontFamily: "'Fraunces', serif", color: '#10233d', lineHeight: '1.2' }}>Youth Empowerment</h3>
              <p style={{ fontSize: '0.92rem', margin: 0, lineHeight: '1.7', color: '#57616f' }}>Connects senior party leadership with Gwalior's youth through gatherings like the annual Dussehra Milan Samaroh.</p>
            </div>
            <div style={{ background: '#fdfbf7', border: '1px solid #e3ddcb', borderTop: '3px solid #b8912f', padding: '24px 22px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontFamily: "'Fraunces', serif", color: '#10233d', lineHeight: '1.2' }}>Public Grievance Resolution</h3>
              <p style={{ fontSize: '0.92rem', margin: 0, lineHeight: '1.7', color: '#57616f' }}>Holds regular public meetings in Gwalior and Morena on infrastructure, employment, and local administration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports" style={{ padding: '66px 0', background: '#10233d', color: '#fdfbf7' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '44px', alignItems: 'center' }}>

            {/* Image Container - Hockey.png with face visible */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '8px',
              color: '#cdb877',
              textAlign: 'center',
              padding: 0,
              aspectRatio: '4/3',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img
                src="Hocky.png"
                alt="Devendra Pratap Singh Tomar at Hockey India event"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  objectPosition: 'top 20%'
                }}
              />
            </div>

            {/* Text Content */}
            <div>
              <span style={{
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#b8912f',
                fontWeight: 600,
                display: 'block',
                marginBottom: '8px'
              }}>
                Beyond Politics
              </span>

              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: 600,
                fontFamily: "'Fraunces', serif",
                color: '#fdfbf7',
                margin: 0,
                height: '1.2'
              }}>
                Sports Administration
              </h2>

              <p style={{
                lineHeight: '1.7',
                color: '#c7cfdb',
                margin: '12px 0 14px'
              }}>
                Field hockey carries a proud history in Madhya Pradesh, and Devendra has built a national reputation within its administration, focused on giving smaller towns a real pathway into the sport.
              </p>

              {/* Points */}
              <div style={{ margin: '14px 0 0', padding: 0 }}>
                <div style={{
                  padding: '10px 0 10px 22px',
                  position: 'relative',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  color: '#dbe2ec',
                  fontSize: '0.92rem'
                }}>
                  Expanding turf facilities and training academies across central India
                </div>
                <div style={{
                  padding: '10px 0 10px 22px',
                  position: 'relative',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  color: '#dbe2ec',
                  fontSize: '0.92rem'
                }}>
                  Promoting grassroots talent from smaller towns
                </div>
                <div style={{
                  padding: '10px 0 10px 22px',
                  position: 'relative',
                  borderBottom: 'none',
                  color: '#dbe2ec',
                  fontSize: '0.92rem'
                }}>
                  Building structural pathways toward the national team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" style={{ padding: '66px 0' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8912f', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Timeline</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, fontFamily: "'Fraunces', serif", color: '#10233d', margin: 0, lineHeight: '1.2' }}>Journey So Far</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>

            {/* Timeline Item 1 - Early Career */}
            <div style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: '20px', alignItems: 'center', paddingBottom: '26px', borderBottom: '1px solid #e3ddcb' }}>
              <div
                style={{
                  aspectRatio: '1/1',
                  padding: '0',
                  background: '#f6f2e9',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '4px',
                  color: '#9a9276',
                  textAlign: 'center',
                  overflow: 'hidden',
                  border: '1.5px solid #c9c0a1',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img
                  src="Gwalior.png"
                  alt="Gwalior-Morena region map"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  id="img1"
                />
                {/* Hover Overlay */}
                <div className="overlay" style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}>
                  <span style={{
                    color: '#fff',
                    background: '#b8912f',
                    padding: '4px 14px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => {
                      const overlay = document.getElementById('view1');
                      if (overlay.style.display === 'flex') {
                        overlay.style.display = 'none';
                      } else {
                        overlay.style.display = 'flex';
                      }
                    }}>view</span>
                  <span style={{
                    color: '#fff',
                    background: '#10233d',
                    padding: '4px 14px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => {
                      const img = document.getElementById('img1');
                      const link = document.createElement('a');
                      link.href = img.src;
                      link.download = 'Gwalior.png';
                      link.click();
                    }}>download</span>
                </div>
                {/* View Overlay */}
                <div id="view1" style={{
                  position: 'fixed',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.85)',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 9999,
                  flexDirection: 'column'
                }}>
                  <img
                    src="Gwalior.png"
                    alt="Gwalior-Morena region"
                    style={{
                      maxWidth: '60%',
                      maxHeight: '70%',
                      objectFit: 'contain'
                    }}
                  />
                  <span style={{
                    color: '#fff',
                    background: '#b8912f',
                    padding: '6px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontSize: '1rem'
                  }}
                    onClick={() => {
                      document.getElementById('view1').style.display = 'none';
                    }}>✕</span>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#b8912f', fontWeight: 600, letterSpacing: '0.04em', display: 'block', marginBottom: '3px' }}>Early Career</span>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.02rem', margin: '0 0 3px', color: '#10233d', lineHeight: '1.2' }}>Grounded in Gwalior-Morena</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.7', color: '#57616f' }}>Grew up building deep personal networks across the districts that remain the family's political base.</p>
              </div>
            </div>

            {/* Timeline Item 2 - Party Organization */}
            <div style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: '20px', alignItems: 'center', paddingBottom: '26px', borderBottom: '1px solid #e3ddcb' }}>
              <div
                style={{
                  aspectRatio: '1/1',
                  padding: '0',
                  background: '#f6f2e9',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '4px',
                  color: '#9a9276',
                  textAlign: 'center',
                  overflow: 'hidden',
                  border: '1.5px solid #c9c0a1',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img
                  src="bjp.png"
                  alt="BJP Party Organization"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  id="img2"
                />
                <div className="overlay" style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}>
                  <span style={{
                    color: '#fff',
                    background: '#b8912f',
                    padding: '4px 14px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => {
                      const overlay = document.getElementById('view2');
                      if (overlay.style.display === 'flex') {
                        overlay.style.display = 'none';
                      } else {
                        overlay.style.display = 'flex';
                      }
                    }}>view</span>
                  <span style={{
                    color: '#fff',
                    background: '#10233d',
                    padding: '4px 14px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => {
                      const img = document.getElementById('img2');
                      const link = document.createElement('a');
                      link.href = img.src;
                      link.download = 'bjp.png';
                      link.click();
                    }}>download</span>
                </div>
                <div id="view2" style={{
                  position: 'fixed',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.85)',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 9999,
                  flexDirection: 'column'
                }}>
                  <img
                    src="bjp.png"
                    alt="BJP Party Organization"
                    style={{
                      maxWidth: '60%',
                      maxHeight: '70%',
                      objectFit: 'contain'
                    }}
                  />
                  <span style={{
                    color: '#fff',
                    background: '#b8912f',
                    padding: '6px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontSize: '1rem'
                  }}
                    onClick={() => {
                      document.getElementById('view2').style.display = 'none';
                    }}>✕</span>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#b8912f', fontWeight: 600, letterSpacing: '0.04em', display: 'block', marginBottom: '3px' }}>Ongoing</span>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.02rem', margin: '0 0 3px', color: '#10233d', lineHeight: '1.2' }}>Party Organization</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.7', color: '#57616f' }}>Took on booth-level and youth mobilization work as the BJP's organizational anchor in northern Madhya Pradesh.</p>
              </div>
            </div>

            {/* Hockey India */}
            <div style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: '20px', alignItems: 'center', paddingBottom: '26px', borderBottom: '1px solid #e3ddcb' }}>
              <div
                style={{
                  aspectRatio: '1/1',
                  padding: '0',
                  background: '#f6f2e9',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '4px',
                  color: '#9a9276',
                  textAlign: 'center',
                  overflow: 'hidden',
                  border: '1.5px solid #c9c0a1',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img
                  src="hockylogo.png"
                  alt="Hockey India Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  id="img3"
                />
                <div className="overlay" style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}>
                  <span style={{
                    color: '#fff',
                    background: '#b8912f',
                    padding: '4px 14px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => {
                      const overlay = document.getElementById('view3');
                      if (overlay.style.display === 'flex') {
                        overlay.style.display = 'none';
                      } else {
                        overlay.style.display = 'flex';
                      }
                    }}>view</span>
                  <span style={{
                    color: '#fff',
                    background: '#10233d',
                    padding: '4px 14px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => {
                      const img = document.getElementById('img3');
                      const link = document.createElement('a');
                      link.href = img.src;
                      link.download = 'hockylogo.png';
                      link.click();
                    }}>download</span>
                </div>
                <div id="view3" style={{
                  position: 'fixed',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.85)',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 9999,
                  flexDirection: 'column'
                }}>
                  <img
                    src="hockylogo.png"
                    alt="Hockey India Logo"
                    style={{
                      maxWidth: '60%',
                      maxHeight: '70%',
                      objectFit: 'contain'
                    }}
                  />
                  <span style={{
                    color: '#fff',
                    background: '#b8912f',
                    padding: '6px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontSize: '1rem'
                  }}
                    onClick={() => {
                      document.getElementById('view3').style.display = 'none';
                    }}>✕</span>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#b8912f', fontWeight: 600, letterSpacing: '0.04em', display: 'block', marginBottom: '3px' }}>Ongoing</span>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.02rem', margin: '0 0 3px', color: '#10233d', lineHeight: '1.2' }}>Hockey India</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.7', color: '#57616f' }}>Appointed Vice-President, focused on academies and grassroots talent pathways in central India.</p>
              </div>
            </div>

            {/* Timeline Item 4 - Election-Season Controversy */}
            <div style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: '20px', alignItems: 'center', paddingBottom: '0', borderBottom: 'none' }}>
              <div
                style={{
                  aspectRatio: '1/1',
                  padding: '0',
                  background: '#f6f2e9',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '4px',
                  color: '#9a9276',
                  textAlign: 'center',
                  overflow: 'hidden',
                  border: '1.5px solid #c9c0a1',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img
                  src="ramu bhaiya.png"
                  alt="Devendra Pratap Singh Tomar - Ramu Bhaiya"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  id="img4"
                />
                <div className="overlay" style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}>
                  <span style={{
                    color: '#fff',
                    background: '#b8912f',
                    padding: '4px 14px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => {
                      const overlay = document.getElementById('view4');
                      if (overlay.style.display === 'flex') {
                        overlay.style.display = 'none';
                      } else {
                        overlay.style.display = 'flex';
                      }
                    }}>view</span>
                  <span style={{
                    color: '#fff',
                    background: '#10233d',
                    padding: '4px 14px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                    onClick={() => {
                      const img = document.getElementById('img4');
                      const link = document.createElement('a');
                      link.href = img.src;
                      link.download = 'ramu bhaiya.png';
                      link.click();
                    }}>download</span>
                </div>
                <div id="view4" style={{
                  position: 'fixed',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.85)',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 9999,
                  flexDirection: 'column'
                }}>
                  <img
                    src="ramu bhaiya.png"
                    alt="Devendra Pratap Singh Tomar - Ramu Bhaiya"
                    style={{
                      maxWidth: '60%',
                      maxHeight: '70%',
                      objectFit: 'contain'
                    }}
                  />
                  <span style={{
                    color: '#fff',
                    background: '#b8912f',
                    padding: '6px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontSize: '1rem'
                  }}
                    onClick={() => {
                      document.getElementById('view4').style.display = 'none';
                    }}>✕</span>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#b8912f', fontWeight: 600, letterSpacing: '0.04em', display: 'block', marginBottom: '3px' }}>Nov 2023</span>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.02rem', margin: '0 0 3px', color: '#10233d', lineHeight: '1.2' }}>Election-Season Controversy</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.7', color: '#57616f' }}>Faced national media scrutiny during the Madhya Pradesh Assembly Elections — detailed below.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controversy Section */}
      <section style={{ padding: '66px 0', borderTop: '1px solid #e3ddcb' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8912f', fontWeight: 600, display: 'block', marginBottom: '8px' }}>In the News</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, fontFamily: "'Fraunces', serif", color: '#10233d', margin: 0, lineHeight: '1.2' }}>2023 Election-Season Controversy</h2>
          </div>
          <div style={{ background: '#f6f2e9', border: '1px solid #e3ddcb', borderRadius: '6px', padding: '32px 34px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#10233d', background: '#ece3c8', padding: '4px 12px', borderRadius: '3px', marginBottom: '16px', fontWeight: 600 }}>Disputed &amp; widely reported</span>
            <p style={{ lineHeight: '1.7', color: '#57616f', margin: '0 0 14px' }}>In the run-up to the November 2023 Madhya Pradesh Assembly Elections, videos allegedly showing Devendra Tomar discussing large financial transactions were circulated by opposition parties and covered widely in the national press.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginTop: '18px' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.03em', color: '#10233d', marginBottom: '8px', fontWeight: 700, fontFamily: "'Source Sans 3', sans-serif" }}>The Allegation</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#57616f', margin: 0 }}>The Indian National Congress used the clips at state-wide rallies, framing them as evidence in its broader "commission" narrative against the state government.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.03em', color: '#10233d', marginBottom: '8px', fontWeight: 700, fontFamily: "'Source Sans 3', sans-serif" }}>The Response</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#57616f', margin: 0 }}>Devendra Tomar and his family denied the videos' authenticity, called it a politically timed conspiracy, filed a police complaint, and asked forensic authorities to examine the clips.</p>
              </div>
            </div>
            <p style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px dashed #e3ddcb', fontSize: '0.84rem', fontStyle: 'italic', lineHeight: '1.7', color: '#57616f' }}>This remains a contested, publicly reported matter rather than a settled one. Narendra Singh Tomar went on to win his seat and was later appointed Speaker of the Legislative Assembly.</p>
          </div>
        </div>
      </section>

      {/* Footer - Simple */}
      <footer style={{
        background: '#10233d',
        borderTop: '2px solid rgba(184, 145, 47, 0.3)',
        padding: '50px 0 0',
        position: 'relative'
      }}>

        {/* Decorative Gold Line */}
        <div style={{
          position: 'absolute',
          top: '-1px',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #b8912f, #fdfbf7, #b8912f, transparent)'
        }}></div>

        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px' }}>

          {/* Main Footer Grid - 3 Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '30px'
          }}>

            {/* Column 1 - Useful Links */}
            <div>
              <h4 style={{
                color: '#fdfbf7',
                fontSize: '0.95rem',
                margin: '0 0 14px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                Useful Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
  color: '#8a99b0',
  textDecoration: 'none',
  fontSize: '0.92rem',
  fontWeight: 600,
  transition: 'color 0.3s',
  cursor: 'pointer'
}}
  onMouseEnter={(e) => e.target.style.color = '#b8912f'}
  onMouseLeave={(e) => e.target.style.color = '#8a99b0'}
>Home</a>

                <a href="#about" style={{
                  color: '#8a99b0',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.3s'
                }}
                  onMouseEnter={(e) => e.target.style.color = '#b8912f'}
                  onMouseLeave={(e) => e.target.style.color = '#8a99b0'}
                >About Us</a>
                <a href="#journey" style={{
                  color: '#8a99b0',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.3s'
                }}
                  onMouseEnter={(e) => e.target.style.color = '#b8912f'}
                  onMouseLeave={(e) => e.target.style.color = '#8a99b0'}
                >Journey</a>
                <a href="#work" onClick={(e) => {
                  e.preventDefault();
                  const workSection = document.getElementById('work');
                  if (workSection) {
                    workSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }} style={{
                  color: '#8a99b0',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.3s',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => e.target.style.color = '#b8912f'}
                  onMouseLeave={(e) => e.target.style.color = '#8a99b0'}
                >Work</a>
              </div>
            </div>

            {/* Column 2 - Follow Us */}
            <div>
              <h4 style={{
                color: '#fdfbf7',
                fontSize: '0.95rem',
                margin: '0 0 14px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                Follow Us
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="https://www.facebook.com/RamuTomarBjp" target="_blank" rel="noopener noreferrer" style={{
                  color: '#8a99b0',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.3s'
                }}
                  onMouseEnter={(e) => e.target.style.color = '#b8912f'}
                  onMouseLeave={(e) => e.target.style.color = '#8a99b0'}
                >Facebook</a>
                <a href="https://www.instagram.com/devendratomargwalior" target="_blank" rel="noopener noreferrer" style={{
                  color: '#8a99b0',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.3s'
                }}
                  onMouseEnter={(e) => e.target.style.color = '#b8912f'}
                  onMouseLeave={(e) => e.target.style.color = '#8a99b0'}
                >Instagram</a>
              </div>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 style={{
                color: '#fdfbf7',
                fontSize: '0.95rem',
                margin: '0 0 14px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                Contact
              </h4>
              <div style={{ color: '#8a99b0', fontSize: '0.92rem', fontWeight: 500, lineHeight: '2' }}>
                <div style={{ fontWeight: 600 }}>info@devendratomar.in</div>
                <div style={{ fontWeight: 600 }}>+91 98765 43210</div>
                <div style={{ color: '#7d879a', fontSize: '0.85rem', fontWeight: 400, marginTop: '4px' }}>Gwalior, MP</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            margin: '0 0 18px'
          }}></div>

          {/* Bottom Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            paddingBottom: '25px'
          }}>
            <div style={{
              color: '#7d879a',
              fontSize: '0.85rem',
              fontWeight: 500
            }}>
              &copy; 2026 <span style={{ color: '#b8912f', fontWeight: 700 }}>Devendra Pratap Singh Tomar</span> · Gwalior. All rights reserved.
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              color: '#7d879a',
              fontSize: '0.78rem',
              fontWeight: 500
            }}>
              <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#b8912f'}
                onMouseLeave={(e) => e.target.style.color = '#7d879a'}>Privacy Policy</span>
              <span style={{ color: 'rgba(255,255,255,0.08)' }}>|</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#b8912f'}
                onMouseLeave={(e) => e.target.style.color = '#7d879a'}>Terms</span>
              <span style={{ color: 'rgba(255,255,255,0.08)' }}>|</span>
              <span style={{ color: '#7d879a' }}>
                <span style={{ color: '#b8912f', fontWeight: 700 }}>e-Biz</span> Technocrats
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Biography;