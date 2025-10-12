import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar" style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2563eb',
            textDecoration: 'none'
          }}>
            NepalMart
          </Link>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <Link to="/" style={{
              color: '#374151',
              textDecoration: 'none'
            }}>Home</Link>
            <Link to="/products" style={{
              color: '#374151',
              textDecoration: 'none'
            }}>Products</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/cart" style={{
                  color: '#374151',
                  textDecoration: 'none',
                  position: 'relative'
                }}>
                  Cart
                  {items.length > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {items.length}
                    </span>
                  )}
                </Link>
                {user?.role === 'admin' && (
                  <Link to="/admin" style={{
                    color: '#374151',
                    textDecoration: 'none'
                  }}>Admin</Link>
                )}
                <Link to="/dashboard" style={{
                  color: '#374151',
                  textDecoration: 'none'
                }}>Dashboard</Link>
                <button 
                  onClick={handleLogout}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={{
                  color: '#374151',
                  textDecoration: 'none'
                }}>Login</Link>
                <Link to="/register" style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  textDecoration: 'none'
                }}>Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
