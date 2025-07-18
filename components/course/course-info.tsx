"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Briefcase, FileText, Mail, Globe, Phone, Users, BookOpen, Target, Package } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import type { Course } from "@/lib/courses-data"

interface CourseInfoProps {
  course: Course
}

export default function CourseInfo({ course }: CourseInfoProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">


          {/* Benefits */}
          <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-prolab-violet" />
              <h3 className="text-base sm:text-lg font-semibold text-prolab-black dark:text-white font-heading">Beneficios</h3>
            </div>
            <ul className="space-y-3">
              {course.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-prolab-violet mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm font-body">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Job Opportunities */}
          <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="w-6 h-6 text-prolab-violet" />
              <h3 className="text-base sm:text-lg font-semibold text-prolab-black dark:text-white font-heading">Salida Laboral</h3>
            </div>
            <ul className="space-y-3">
              {course.jobOpportunities.map((job, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-prolab-violet mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm font-body">{job}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Additional Information Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8">
          {/* Target Audience */}
          {course.targetAudience && (
            <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-prolab-violet" />
                <h3 className="text-base sm:text-lg font-semibold text-prolab-black dark:text-white font-heading">Dirigido A</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-body">{course.targetAudience}</p>
            </Card>
          )}

          {/* What Includes */}
          {course.whatIncludes && course.whatIncludes.length > 0 && (
            <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <Package className="w-6 h-6 text-prolab-violet" />
                <h3 className="text-base sm:text-lg font-semibold text-prolab-black dark:text-white font-heading">¿Qué Incluye?</h3>
              </div>
              <ul className="space-y-3">
                {course.whatIncludes.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-prolab-violet mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        {/* Methodology */}
        {course.methodology && (
          <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="w-6 h-6 text-prolab-violet" />
              <h3 className="text-base sm:text-lg font-semibold text-prolab-black dark:text-white font-heading">Metodología</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-body">{course.methodology}</p>
          </Card>
        )}

        {/* Final Project */}
        {course.finalProject && (
          <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-6 h-6 text-prolab-violet" />
              <h3 className="text-base sm:text-lg font-semibold text-prolab-black dark:text-white font-heading">Proyecto Final</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-body">{course.finalProject}</p>
          </Card>
        )}

        {/* Contact Information - Solo si está definida para el curso */}
        {course.contactInfo && (
        <div className="bg-prolab-violet rounded-xl p-8 text-white mt-8">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-8">
            <Mail className="w-6 h-6 text-white" />
            <h3 className="text-xl font-semibold text-white font-heading">Información De Contacto</h3>
          </div>
          
          {/* Contact Methods - Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Email */}
              {course.contactInfo.email && (
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white/80 text-sm font-body mb-1">Email</p>
                <a 
                      href={`mailto:${course.contactInfo.email}`}
                  className="text-white font-semibold hover:underline font-body text-lg"
                >
                      {course.contactInfo.email}
                </a>
              </div>
            </div>
              )}

            {/* Website */}
              {course.contactInfo.website && (
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white/80 text-sm font-body mb-1">Website</p>
                <a 
                      href={`https://${course.contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:underline font-body text-lg"
                >
                      {course.contactInfo.website}
                </a>
              </div>
            </div>
              )}

              {/* Phone */}
              {course.contactInfo.phone && (
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                    <p className="text-white/80 text-sm font-body mb-1">Teléfono</p>
                <a 
                      href={`tel:+54${course.contactInfo.phone}`}
                  className="text-white font-semibold hover:underline font-body text-lg"
                >
                      +54 {course.contactInfo.phone}
                </a>
              </div>
                </div>
              )}

              {/* Social Media */}
              {course.contactInfo.socialMedia && (
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <FaWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/80 text-sm font-body mb-1">Redes Sociales</p>
                    <span className="text-white font-semibold font-body text-lg">
                      {course.contactInfo.socialMedia}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}


      </div>
    </section>
  )
}
