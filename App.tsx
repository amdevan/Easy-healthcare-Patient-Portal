import React, { useState } from 'react';
import { LoginView } from './types';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { AssistantWidget } from './components/AssistantWidget';

const App: React.FC = () => {
  const [view, setView] = useState<LoginView>(LoginView.LOGIN);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    name: '',
    phoneNumber: '',
    address: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(view === LoginView.REGISTER ? "Demo: Account created successfully!" : "Demo: Login successful!");
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50">
      
      {/* Left Section: Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary-900">
        <div className="absolute inset-0 bg-primary-900/40 z-10"></div>
        <img 
          src="https://picsum.photos/1000/1200" 
          alt="Medical professional with patient" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        <div className="relative z-20 flex flex-col justify-between h-full p-16 text-white">
          <div>
            <div className="flex items-center space-x-3 mb-8">
               <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
               </div>
               <span className="text-2xl font-bold tracking-tight">Easy healthcare</span>
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Your health journey, <br/>
              <span className="text-primary-300">simplified.</span>
            </h1>
            <p className="text-lg text-primary-100 max-w-md leading-relaxed">
              Access your medical records, schedule appointments, and communicate with your care team in one secure place.
            </p>
          </div>
          
          <div className="space-y-6">
             <div className="flex items-center space-x-4 text-sm text-primary-100">
               <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-primary-900" src="https://picsum.photos/32/32?random=1" alt=""/>
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-primary-900" src="https://picsum.photos/32/32?random=2" alt=""/>
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-primary-900" src="https://picsum.photos/32/32?random=3" alt=""/>
               </div>
               <p>Trusted by 10,000+ patients</p>
             </div>
          </div>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
             <div className="flex items-center space-x-2 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-2xl font-bold tracking-tight">Easy healthcare</span>
             </div>
          </div>

          <div className="text-center lg:text-left mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              {view === LoginView.LOGIN && 'Welcome back'}
              {view === LoginView.REGISTER && 'Create an account'}
              {view === LoginView.FORGOT_PASSWORD && 'Reset Password'}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {view === LoginView.LOGIN && 'Please enter your details to sign in.'}
              {view === LoginView.REGISTER && 'Start your journey to better health today.'}
              {view === LoginView.FORGOT_PASSWORD && "Enter your email and we'll send a reset link."}
            </p>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-5">
              
              {view === LoginView.REGISTER && (
                <>
                 <Input 
                   label="Full Name" 
                   name="name"
                   type="text" 
                   placeholder="John Doe" 
                   value={formData.name}
                   onChange={handleInputChange}
                   icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                   }
                 />
                 <Input 
                   label="Phone Number" 
                   name="phoneNumber"
                   type="tel" 
                   placeholder="(555) 123-4567" 
                   value={formData.phoneNumber}
                   onChange={handleInputChange}
                   icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                   }
                 />
                 <Input 
                   label="Address" 
                   name="address"
                   type="text" 
                   placeholder="123 Wellness Ave, Suite 100" 
                   value={formData.address}
                   onChange={handleInputChange}
                   icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                   }
                 />
                </>
              )}

              <Input 
                label="Email address" 
                name="email"
                type="email" 
                autoComplete="email" 
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleInputChange}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />

              {view !== LoginView.FORGOT_PASSWORD && (
                <div className="space-y-1">
                  <Input 
                    label="Password" 
                    name="password"
                    type="password" 
                    autoComplete={view === LoginView.LOGIN ? "current-password" : "new-password"}
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={handleInputChange}
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    }
                  />
                  {view === LoginView.LOGIN && (
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">Remember me</label>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setView(LoginView.FORGOT_PASSWORD)}
                        className="text-sm font-medium text-primary-600 hover:text-primary-500"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}
                </div>
              )}

              <Button type="submit" fullWidth isLoading={isLoading}>
                {view === LoginView.LOGIN && 'Sign in'}
                {view === LoginView.REGISTER && 'Create account'}
                {view === LoginView.FORGOT_PASSWORD && 'Send reset link'}
              </Button>
            </form>

            {/* Social / Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">
                  {view === LoginView.LOGIN ? 'New to Easy healthcare?' : 'Already have an account?'}
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button 
                type="button"
                onClick={() => setView(view === LoginView.LOGIN ? LoginView.REGISTER : LoginView.LOGIN)}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                {view === LoginView.LOGIN ? 'Create an account' : 'Sign in to your account'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Gemini Assistant */}
      <AssistantWidget />
    </div>
  );
};

export default App;